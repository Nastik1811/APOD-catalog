import React, { useState } from 'react'
import Loader from './Loader'
import clsx from 'clsx'

export const ApodPreview = ({imgUrl, date, title, onClick}) => {
    const [loading, setLoading] = useState(true)
    return(
        <div className="preview" onClick={onClick}>
                {loading && <Loader/>}
                <img 
                    className={clsx("preview-img", {"hidden": loading})} 
                    src={imgUrl} 
                    alt={title} 
                    onLoad={() => setLoading(false)}
                    />
                <span className="preview-title">{title}</span>
                <span className="preview-date">{date}</span>    
        </div>
    )
}