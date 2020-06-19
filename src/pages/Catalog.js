import React, { useState, useEffect } from 'react'
import { ApodList } from '../components/ApodsList';
import Loader from '../components/Loader';
import { getDatesRange, isImage } from '../utils';
import ExpanedApod from '../components/ExpanedApod';


const Catalog = () => {
    const [apods, setApods] = useState(null)
    const [loading, setLoading] = useState(true)


    const [pickedDate, setPickedDate] = useState('2020-10-12')
    const [show, setShow] = useState(false)

    useEffect(() => {
        const dates = getDatesRange()
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
    }, [])

    const handleClick = date => {
        setPickedDate(date)
        setShow(true)
    }

  return (
      <section className="main-section">
          <header className="section-header">
              <h1 className="section-title">APODs from the last 30 days</h1>
              <span className="section-details">* Click to expand HD *</span>
          </header>
        {loading? <Loader/> : <ApodList apods={apods} onClick={handleClick}/>}
        {show && <ExpanedApod date={pickedDate} onDismiss={() => setShow(false)}/>}
      </section>
  );
}

export default Catalog
