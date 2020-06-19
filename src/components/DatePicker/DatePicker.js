import React from 'react'
import { params } from './config'

const DatePicker = ({date, onChange}) => {
    const handleChange = e => onChange(e.target.value)
    
    return(    
        <div className="date-picker">
            <label htmlFor="picker">Let's pick a date</label>
            <input 
                name="picker" 
                type="date" 
                value={date} 
                onChange={handleChange} 
                max={params.maxValue} 
                min={params.minValue}/>
            <span className="error_msg"/>
        </div>
        
    )
}

export default DatePicker