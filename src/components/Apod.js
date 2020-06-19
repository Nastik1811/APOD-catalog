import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import clsx from 'clsx'

const Apod = ({imgUrl, title, description}) => {
    const [loading, setLoading] = useState(true)

    console.log(loading)
    return(
        <>
    <div className={clsx("apod-container", {"hidden": loading})}>
        <header>
            <h2 className="title">{title}</h2>  
        </header>
        <div className="picture-container">
            <img 
                src={imgUrl} 
                alt={title} 
                className="picture" 
                onLoad={() => setLoading(false)}
                />
            <div className="description-container">
                <p>
                    {description}
                </p>
            </div>
        </div>         
    </div>
    {loading && <Loader/>}
    </>
    )  
}

export default Apod