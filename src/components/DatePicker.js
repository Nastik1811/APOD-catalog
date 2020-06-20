import React from 'react'
import { formatDate } from '../utils'
import { minDate } from '../constants'

const DatePicker = ({date, onChange}) => {
    const handleChange = e => onChange(e.target.value)
    
    return(    
            <input 
                name="picker" 
                className="picker date-picker"
                type="date" 
                value={date} 
                onChange={handleChange} 
                max={formatDate(new Date())} 
                min={formatDate(new Date(minDate.year, minDate.month, minDate.day))}
                />
        
    )
}

export default DatePicker