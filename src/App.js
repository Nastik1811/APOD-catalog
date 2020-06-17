import React from 'react'
import ApodContainer from './ApodContainer'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Astronomy Picture of the Day</h1>
      </header>
      <section>
        <ApodContainer date = {new Date()} />  
      </section>
    
    </div>
  );
}

export default App
