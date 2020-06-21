import React, { useEffect, useState } from 'react'
import MonthPicker from './MonthPicker'
import YearPicker from './YearPicker'

const DatePicker = ({month, year, onMonthChange, onYearChange}) => {
    const [disableMonths, setDisableMonths] = useState(false)
    const [disableYear, setDisableYear] = useState(false)

    useEffect(() => {
        const today = new Date()
        if(year === today.getFullYear()){
            setDisableMonths(true)
        }
        else{
            setDisableMonths(false)
        }

        if(month > today.getMonth() + 1){
            setDisableYear(true)
        }
        else{
            setDisableYear(false)
        }

    }, [month, year])

    return(    
        <div className="picker-container">
            <MonthPicker value={month} onSelect={onMonthChange} disableMonths={disableMonths}/>
            <YearPicker value={year} onSelect={onYearChange} disableYear={disableYear} thisYear={new Date().getFullYear()}/>
        </div>
        
    )
}

export default DatePicker