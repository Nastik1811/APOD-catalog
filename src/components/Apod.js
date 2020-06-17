import React from 'react'

const Apod = ({imgUrl, title}) => {

    return(
    <div className="apod-container">
        <header>
            <h2 className="title">{title}</h2>  
        </header>
        <div className="picture-container">
            <img 
                src={imgUrl} 
                alt={title} 
                className="picture"
                />
            </div> 
            
    </div>
    )  
}

export default Apod