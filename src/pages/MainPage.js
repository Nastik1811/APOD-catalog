import React, { useState, useEffect } from 'react'
import { formatDate, fetchApod } from '../utils';
import Loader from '../components/Loader';
import Apod from '../components/Apod';
import ErrorMsg from '../components/Error';
import { NavLink } from 'react-router-dom';
import Calendar from '../components/Calendar';


const MainPage = () => {
  const initialDate = () => window.localStorage.getItem("date") || formatDate(new Date());

  const [date, setDate] = useState(initialDate)
  const [apod, setApod] = useState(null)

  const [loading, setLoading] = useState(true)
  const [imgLoading, setImgLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => window.localStorage.setItem("date", date), [date]);
  
  useEffect(() => {
    setLoading(true)
    setImgLoading(true)
    setError(null)

    fetchApod(date)
        .then((data) => {
            if(data.media_type !== "image"){
                throw new Error("Oops. The day has no image.")
            }
            setApod(data)
        })
        .catch((e) => {
            setError(e)
            setImgLoading(false)
        })
        .finally(() => setLoading(false))
    }, [date])

  return (
    <>
        <header className="header">
            <h1 className="title">Astronomy Picture of the Day</h1>
            <NavLink className="nav-link" exact to='/catalog'>Go to catalog</NavLink>
        </header>
        <Calendar date={date} onChange={setDate}/>
        <section className="content-section">
            {imgLoading && <Loader/>}
            {!loading && !error && 
                <Apod 
                    imgUrl={apod.url} 
                    title={apod.title} 
                    description={apod.explanation} 
                    hidden={imgLoading}
                    onLoad={() => setImgLoading(false)}/> }
            {error && <ErrorMsg message={error.message}/>}
        </section>
    </>)
}

export default MainPage
