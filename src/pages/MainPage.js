import React, { useState, useEffect } from 'react'
import ApodContainer from '../components/ApodContainer'
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
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`).then(
        response =>  response.json()
    )
    .then(setApod)
    .then(() => {
        setLoading(false)
    })
}, [date])

  return (
    loading ? <Loader/>
    : 
    <div className="main-section">
        <DatePicker date={date} onChange={setDate}/>
        <Apod imgUrl={apod.url} title={apod.title}/> 
        
    </div>
  );
}

export default MainPage
