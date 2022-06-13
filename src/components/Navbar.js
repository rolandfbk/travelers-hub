import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => (

  <header>
    <nav>
      <div className="logo">
        <img src={logo} alt="planet icon" className="header-image" />
        <h1 className="header-one">Space Travelers&apos; Hub</h1>
      </div>
      <div className="links">
        <Link className="navlink" to="/">Rockets</Link>
        <Link className="navlinks" to="/Missions">Missions</Link>
        <Link className="navlink" to="/MyProfile">My Profile</Link>
      </div>
    </nav>
    <div className="hr" />
  </header>

);

export default Navbar;
