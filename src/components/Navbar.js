import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return (
        <header className="header">
            <h1>Astronomy Picture of the Day</h1>
            <nav className="navbar">
                <NavLink className="nav-link" activeClassName="active-link" exact to='/' >Home</NavLink>
                <NavLink className="nav-link" activeClassName="active-link" to='/catalog'>Catalog</NavLink>              
            </nav>
        </header>
    )

}
export default Navbar;