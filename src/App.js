import React from 'react'
import MainPage from './pages/MainPage';
import Navbar from './components/Navbar';
import { Switch, Route,  BrowserRouter as Router } from 'react-router-dom';
import Catalog from './pages/Catalog';


const App = () => {
  return (
    <Router>
      <div className="container">
            <Navbar/>
              <Switch>
                  <Route exact path='/' component={MainPage}/>
                  <Route exact path='/catalog' component={Catalog}/>
              </Switch>
        </div>
      </Router>
    
  );
}

export default App
