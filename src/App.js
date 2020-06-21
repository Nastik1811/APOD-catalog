import React from 'react'
import MainPage from './pages/MainPage';
import { Switch, Route,  HashRouter as Router } from 'react-router-dom';
import Catalog from './pages/Catalog';


const App = () => {
  return (
    <Router basename='/'>
      <div className="container">
            <Switch>
                <Route path='/catalog' component={Catalog}/>
                <Route exact path='/' component={MainPage}/>
            </Switch>
        </div>
      </Router>
    
  );
}

export default App
