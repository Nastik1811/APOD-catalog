import React from 'react'

export const ApodPreview = ({imgUrl, date, title, onClick}) => {
    return(
        <div className="preview" onClick={onClick}>
                <img className="preview-img" src={imgUrl} alt={title}/>
                <span className="preview-title">{title}</span>
                <span className="preview-date">{date}</span>
        </div>
    )
}