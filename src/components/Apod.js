import React from 'react'
import clsx from 'clsx'

const Apod = ({imgUrl, title, description, hidden, onLoad}) => {
    return(
            <div className={clsx("apod-container", {"hidden": hidden})}>
                <header>
                    <h2 className="title">{title}</h2>  
                </header>
                <div className="picture-container">
                    <img 
                        src={imgUrl} 
                        alt={title} 
                        className="picture" 
                        onLoad={onLoad}
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