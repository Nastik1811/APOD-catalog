import React, { useState, useEffect } from 'react'
import { ApodList } from '../components/ApodsList';
import Loader from '../components/Loader';
import { getDatesRange, isImage, fetchApod } from '../utils';
import ExpanedApod from '../components/ExpanedApod';
import { NavLink } from 'react-router-dom';
import DatePicker from '../components/DatePicker';


const Catalog = () => {
    const initMonth = () => window.localStorage.getItem("month") || new Date().getMonth() + 1;
    const initYear = () => window.localStorage.getItem("year") || new Date().getFullYear();

    const [apods, setApods] = useState(null)
    const [loading, setLoading] = useState(true)

    const [month, setMonth] = useState(initMonth)
    const [year, setYear] = useState(initYear)
    

    const [pickedDate, setPickedDate] = useState(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.localStorage.setItem("month", month)
        window.localStorage.setItem("year", year)
    }, [month, year]);

    useEffect(() => {
        const dates = getDatesRange(month, year)
        const list = []

        for(let date of dates){
            list.push(fetchApod(date).then(apod => {
                if (isImage(apod.url)) {
                    return apod
                }
                return null
            }).catch(e => console.log(e)))
        }
        Promise.all(list).then(data => setApods(data.filter(x => !!x))).then(() => setLoading(false))
        
    }, [month, year])

    const handleClick = date => {
        setPickedDate(date)
        setShow(true)
    }

  return (
      <>
        <header className="section-header">
            <h1 className="section-title">APoD catalog</h1>
            <NavLink className="nav-link" exact to='/'>Return to apod</NavLink>
        </header>
        <DatePicker month={month} year={year} onMonthChange={setMonth} onYearChange={setYear}/>
        {loading? <Loader/> : <ApodList apods={apods} onClick={handleClick}/>}
        {show && <ExpanedApod date={pickedDate} onDismiss={() => setShow(false)}/>}
      </>
  );
}

export default Catalog
