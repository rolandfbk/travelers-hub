import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => (

  <header>
    <nav>
      <div className="logo">
        <img src={logo} alt="planet icon" className="header-image" />
        <h1 className="header-one">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="links">
        <li key={1}>
          <NavLink className="active-link" to="/">Rockets</NavLink>
        </li>
        <li key={2}>
          <NavLink className="active-link" to="/Missions">Missions</NavLink>
          <span>|</span>
        </li>
        <li key={3}>
          <NavLink className="active-link" to="/MyProfile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
    <div className="hr" />
  </header>

);

export default Navbar;
