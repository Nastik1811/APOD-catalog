import React from 'react'
import { getYearsRange } from '../utils'
import { minDate } from '../constants'

const YearPicker = ({value, onSelect}) => {
    const years = getYearsRange(minDate.year, new Date().getFullYear())

    return(
        <select value={value} onChange={onSelect} className="picker">
            {years.map(i => <option value={i.ind} >{i}</option>)}
        </select>
    )   
}

export default YearPicker