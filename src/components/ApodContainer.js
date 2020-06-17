import React, { useState, useEffect } from 'react'
import Apod from './Apod'
const ApodContainer = ({date}) => {
    const [apod, setApod] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`).then(
            response =>  response.json()
        )
        .then(setApod)
        .then(() => {
            setLoading(false)
        })
    }, [date])

    return(
        loading ? <div>Loading...</div>
        : <Apod imgUrl={apod.url} title={apod.title}/>
    )  
}

export default ApodContainer