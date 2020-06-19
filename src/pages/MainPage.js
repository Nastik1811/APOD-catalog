import React, { useState, useEffect } from 'react'
import { formatDate, isImage } from '../utils';
import Loader from '../components/Loader';
import Apod from '../components/Apod';
import DatePicker from '../components/DatePicker/DatePicker';


const MainPage = () => {
  const initialDate = () => window.localStorage.getItem("date") || formatDate(new Date());

  const [date, setDate] = useState(initialDate)
  const [apod, setApod] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => window.localStorage.setItem("date", date), [date]);
  
  useEffect(() => {
    setLoading(true)
    setError(false)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`)
        .then(response => {
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Something went wrong. Try to pick another date.")
            }
        })
        .then((data) => {
            if(data.media_type !== "image"){
                throw new Error("The day has no image. Please, pick another day.")
            }
            setApod(data)
        })
        .then(() => setLoading(false))
        .catch(setError)
    
}, [date])

  return (
    <section className="main-section">
        <header className="section-header">
        </header>
        <DatePicker date={date} onChange={setDate}/>
        {!loading && <Apod imgUrl={apod.url} title={apod.title} description={apod.explanation} onLoad={() => setLoading(false)}/> }
        {error && <div className="error">{error.message}</div>}
        {loading && <Loader/>}
    </section>)
}

export default MainPage
