import React from 'react'
import { getYearsRange } from '../utils'
import { minDate } from '../constants'

const YearPicker = ({value, onSelect}) => {
    const years = getYearsRange(minDate.year, new Date().getFullYear())

    return(
        <select value={value} onChange={e => onSelect(+e.target.value)} className="picker">
            {years.map(i => <option value={i} key={i}>{i}</option>)}
        </select>
    )   
}

export default YearPicker