import React, { useState, useEffect } from 'react'
import { ApodList } from '../components/ApodsList';
import Loader from '../components/Loader';
import { getDatesRange, isImage } from '../utils';
import ExpanedApod from '../components/ExpanedApod';
import MonthPicker from '../components/MonthPicker';
import YearPicker from '../components/YearPicker';
import { NavLink } from 'react-router-dom';


const Catalog = () => {
    const initMonth = () => window.localStorage.getItem("month") || new Date().getMonth() + 1;
    const initYear = () => window.localStorage.getItem("year") || new Date().getFullYear();

    const [apods, setApods] = useState(null)
    const [loading, setLoading] = useState(true)

    const [month, setMonth] = useState(initMonth)
    const [year, setYear] = useState(initYear)
    const [lastEnabled, setLastEnabled] = useState(12)

    const [pickedDate, setPickedDate] = useState(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        if(year === new Date().getFullYear()){
            setLastEnabled(new Date().getMonth() + 1)
        }
        else{
            setLastEnabled(12)
        }
        const dates = getDatesRange(month, year)
        const data = dates.map(async date => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`);
            if(response.status !== 200){
                return null
            }
            const apod = await response.json();
            if (!isImage(apod.url)) {
                return null
            }
            return apod
        })
        Promise.all(data).then(data => setApods(data.filter(x => !!x))).then(() => setLoading(false))
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
        <div className="picker-container">
            <MonthPicker value={month} onSelect={setMonth} lastEnabled={lastEnabled}/>
            <YearPicker value={year} onSelect={setYear}/>
        </div>
        {loading? <Loader/> : <ApodList apods={apods} onClick={handleClick}/>}
        {show && <ExpanedApod date={pickedDate} onDismiss={() => setShow(false)}/>}
      </>
  );
}

export default Catalog
