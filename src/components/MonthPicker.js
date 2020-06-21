import React from 'react'
import { monthNames } from '../constants'

const MonthPicker = ({value, onSelect, disableMonths}) => {
    
    return(
        <select value={value} onChange={e => onSelect(+e.target.value)} className="picker">
            {monthNames.map(
                name => <option 
                            value={monthNames.indexOf(name) + 1} 
                            key={name}
                            disabled={disableMonths && monthNames.indexOf(name) > new Date().getMonth()}
                            >{name}
                        </option>)}
        </select>
    )  
}

export default MonthPicker