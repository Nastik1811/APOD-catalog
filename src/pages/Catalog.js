import React, { useState, useEffect } from 'react'
import { ApodList } from '../components/ApodsList';
import Loader from '../components/Loader';
import { getDatesRange } from '../utils';


const Catalog = () => {
    const [apods, setApods] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const dates = getDatesRange()
        const data = dates.map(async date => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&date=${date}`);
            const apod = await response.json();
            if (!apod.url.match(/\.(gif|jpe?g|png)$/)) {
                return {...apod, url: "https://www.wallpaperflare.com/static/565/426/551/space-illustration-blue-moon-wallpaper.jpg"}
            }
            return apod
        })
        Promise.all(data).then(setApods).then(() => setLoading(false))
    }, [])

  return (
      <section className="main-section">
          <header className="section-header">
              <h1 className="section-title">APODs for the last 30 days</h1>
          </header>
        {loading? <Loader/> : <ApodList apods={apods}/>}
      </section>
  );
}

export default Catalog
