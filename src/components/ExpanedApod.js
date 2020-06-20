import React, { useState, useEffect } from 'react'
import ModalView from './ModalView'
import clsx from 'clsx'
import Loader from './Loader'

const ExpanedApod = ({date, onDismiss}) => {
    const [apod, setApod] = useState(null)
    const [loading, setLoading] = useState(true)

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
            {loading && <Loader/>}
            {apod && <img 

                    src={apod.hdurl} 
                    alt={apod.title} 
                    className={clsx("modal-image", {"hidden" : loading}, {"appearing": !loading})}
                    onLoad={() => setLoading(false)}
                    />
                }
        </ModalView>
    )
}

export default ExpanedApod