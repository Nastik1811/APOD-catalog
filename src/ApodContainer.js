import React, { useState, useEffect } from 'react'
import Apod from './Apod'

const ApodContainer = (date) => {
    const [apod, setApod] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(
            response =>  response.json()
        )
        .then( setApod)
        .then(() => {
            setLoading(false)
        })
    }, [])

    return(
        loading ? <div>Loading...</div>
        : <Apod imgUrl={apod.url} title={apod.title}/>
    )  
}

export default ApodContainer