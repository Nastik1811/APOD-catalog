import React from 'react'
import { monthNames } from '../constants'

const MonthPicker = ({value, onSelect}) => {
    const months = monthNames

    return(
        <select value={value} onChange={onSelect} className="picker">
            {months.map(m => <option value={m.indexOf + 1} >{m}</option>)}
        </select>
    )  
}

export default MonthPicker