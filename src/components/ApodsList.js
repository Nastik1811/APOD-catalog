import React, { useState } from 'react'
import { ApodPreview } from './ApodPreview'

export const ApodList= ({apods}) => {
    console.log(apods)
    return(
        <div className="apods-list">
            {apods.map(c => <ApodPreview imgUrl={c.url} title={c.title} date={c.date} key={c.date}/>)}
        </div>
    )
}