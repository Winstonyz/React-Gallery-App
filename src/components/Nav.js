import React from 'react';
import { NavLink } from 'react-router-dom';


//A Nav component for the apps navigation links.
//Clicking a nav link should navigate the user to the correct route, displaying the appropriate info.

const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/architecture'>Architecture</NavLink></li>
        <li><NavLink to='/people'>People</NavLink></li>
        <li><NavLink to='/landscape'>Landscape</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
