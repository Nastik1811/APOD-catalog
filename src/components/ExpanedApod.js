import React, { useState, useEffect } from 'react'
import ModalView from './ModalView'
import Loader from './Loader'

const ExpanedApod = ({date, onDismiss}) => {
    const [apod, setApod] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}&hd=true`)
            .then(response => {
                if(response.status === 200){
                    return response.json()
                }else{
                    throw Error()
                }
            })
            .then(setApod)
            .then(() => setLoading(false))
            .catch(() => alert("Something went wrong. Try to pick another date."))
        },[date])

    return(
        <ModalView onDismiss={onDismiss}>
            {loading ? 
                <Loader/> : 
                <img 
                    src={apod.hdurl} 
                    alt={apod.title} 
                    className="modal-image"
                    />
                }
        </ModalView>
    )
}

export default ExpanedApod