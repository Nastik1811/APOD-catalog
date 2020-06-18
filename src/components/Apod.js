import React from 'react'

const Apod = ({imgUrl, title, description}) => {

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
            <div className="description-container">
                <p>
                    {description}
                </p>
            </div>
        </div> 
            
    </div>
    )  
}

export default Apod