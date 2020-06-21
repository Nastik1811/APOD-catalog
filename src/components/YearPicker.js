import React from 'react'
import { getYearsRange } from '../utils'
import { minDate } from '../constants'

const YearPicker = ({value, onSelect, thisYear, disableYear}) => {
    const years = getYearsRange(minDate.year, thisYear)
    return(
        <select value={value} onChange={e => onSelect(+e.target.value)} className="picker">
            {years.map(i => <option value={i} key={i} disabled={disableYear && i === thisYear}>{i}</option>)}
        </select>
    )   
}

export default YearPicker