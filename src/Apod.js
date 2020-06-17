import React from 'react'

const Apod = ({imgUrl, title}) => {

    return(
    <section className="apod">
        <div className="picture-container">
            <img 
            src={imgUrl} 
            alt={title} 
            className="picture"
            />
            </div>
            <h2>{title}</h2>   
            
    </section>
    )  
}

export default Apod