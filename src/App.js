import React from 'react'
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import { Switch, Route,  HashRouter as Router } from 'react-router-dom';
import Catalog from './pages/Catalog';


const App = () => {
  return (
    <Router basename='/'>
      <div className="container">
            <section className="main-section">
            <Switch>
                <Route path='/catalog' component={Catalog}/>
                <Route exact path='/' component={MainPage}/>
            </Switch>
            </section>
        </div>
      </Router>
    
  );
}

export default App
