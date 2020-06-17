import React, { useState, useEffect } from 'react'
import { DatePicker } from '../components/DatePicker'
import { formatDate } from '../utils';
import Loader from '../components/Loader';
import Apod from '../components/Apod';


const MainPage = () => {
  const initialDate = () => window.localStorage.getItem("date") || formatDate(new Date());
  const [date, setDate] = useState(initialDate)
  const [apod, setApod] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log(process.env.REACT_APP_API_KEY)

  useEffect(() => window.localStorage.setItem("date", date), [date]);
  
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`)
        .then(response => {
            if(response.status === 200){
                return response.json()
            }else{
                throw Error()
            }
        })
        .then(setApod)
        .then(() => {
            setLoading(false)
            })
        .catch(() => alert("Something went wrong. Try to pick another date."))
    
}, [date])

  return (
    <section className="main-section">
        <header className="section-header">
            <h1 className="section-title">Astronomy Picture of the Day</h1>
        </header>
        <DatePicker date={date} onChange={setDate}/>
        {loading ? <Loader/>:<Apod imgUrl={apod.url} title={apod.title}/> }
    </section>)
}

export default MainPage
