import React from 'react'

// const formatDate = date => {
//     let year = date.getFullYear()
//     let month = date.getMonth()
//     month = month < 10 ? '0' + month : month
//     let day = date.getDate()
//     day = day < 10 ? '0' + day : day

//     return year + '-' + month + '-' + day
// }

export const DatePicker = ({date, onChange}) => {
    const handleChange = e => onChange(e.target.value)
    return(
        
        <div className="date-picker">
            <label htmlFor="picker">Let's pick a date</label>
            <input name="picker" type="date" value={date} onChange={handleChange} />
        </div>
        
    )
}