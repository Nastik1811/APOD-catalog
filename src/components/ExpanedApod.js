import React, { useState, useEffect } from 'react'
import ModalView from './ModalView'

const ExpanedApod = ({date, onDismiss}) => {
    const [apod, setApod] = useState(null)

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}&hd=true`)
            .then(response => {
                if(response.status === 200){
                    return response.json()
                }else{
                    throw Error()
                }
            })
            .then(setApod)
            .catch(() => alert("Something went wrong. Try to pick another date."))
        },[date])

    return(
        <ModalView onDismiss={onDismiss}>
            {apod && <img 
                    src={apod.hdurl} 
                    alt={apod.title} 
                    className="modal-image"
                    />
                }
        </ModalView>
    )
}

export default ExpanedApod