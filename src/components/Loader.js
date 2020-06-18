import React from 'react'
import  './Loader.css'

const Loader = () => {
    // return(
    //     <div className="loader-container">
    //              Loading...
    //     </div>
    // )
    return(
        <div className="loader">
                <div className="animation-container">
                <div className="animation-group">
                    <span className="loader-component"></span>
                    <span className="loader-component"></span>
                    <span className="loader-component"></span>
                    <span className="loader-component"></span>
                </div>
            </div>
        </div>
    )
}

export default Loader;