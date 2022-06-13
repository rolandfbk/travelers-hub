import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => (

  <nav>
    <img src={logo} alt="planet icon" className="header image" />
    <h1 className="header-one">Space Travelers&apos; Hub</h1>
    <Link className="navlink" to="/">Rockets</Link>
    <Link className="navlink" to="/Missions">Missions</Link>
    <Link className="navlink" to="/MyProfile">My Profile</Link>
  </nav>

);

export default Navbar;
