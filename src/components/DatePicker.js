import React from 'react'

export const DatePicker = ({date, onChange}) => {
    const handleChange = e => onChange(e.target.value)
    return(
        
        <div className="date-picker">
            <label htmlFor="picker">Let's pick a date</label>
            <input name="picker" type="date" value={date} onChange={handleChange} />
        </div>
        
    )
}