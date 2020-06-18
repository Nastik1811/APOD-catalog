import React from 'react'
import { ApodPreview } from './ApodPreview'

export const ApodList= ({apods, onClick}) => {
    return(
        <div className="apods-list">
            {apods.map(c => 
            <ApodPreview 
                imgUrl={c.url} 
                title={c.title} 
                date={c.date} 
                key={c.date} 
                onClick={() => onClick(c.date)}
            />)}
        </div>
    )
}