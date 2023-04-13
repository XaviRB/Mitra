import React from 'react';
import './css/style.css';
import './App.css';
import mitralogo from './img/mitra-logo-02.png'; 
import mitralogolight from './img/mitra-logo-05.png';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="bar">
      <div className="bar__content u-centered">
        <Link to="/LandingPage">
          <img className="bar__logo" src={mitralogolight} alt="logo image"/>
        </Link>
        <input type="checkbox" id="inpNavToggle" />
        <label className="bar__nav-toggle" htmlFor="inpNavToggle">
          <i className="material-icons">menu</i>
        </label>
        <nav className="nav">
          <Link to="/LandingPage" className="nav__link">
            Landing Page
          </Link>
          <Link to="/profile" className="nav__link">
            Profile
          </Link>
          <Link className="nav__link" to='/'>
            Help
          </Link>
          <Link to="/LandingPage" className="btn-green">
            Sign Out
          </Link>
        </nav>
      </div>
    </div>
  );
}

export function LandingNavbar() {
  return (
    <div className="bar">
      <div className="bar__content u-centered">
        <Link to="/LandingPage">
          <img className="bar__logo" src={mitralogo} alt="logo image" />
        </Link>
        <input type="checkbox" id="inpNavToggle" />
        <label className="bar__nav-toggle" htmlFor="inpNavToggle">
          <i className="material-icons">menu</i>
        </label>
        <nav className="nav">
          <Link to="/Home" className="nav__link">
            Home
          </Link>
          <Link to="/Register" className="nav__link">
            Register
          </Link>
          <Link to="/Signin" className="nav__link">
            Login Portal
          </Link>
          <Link to="/Register" className="btn-green">
            Sign Up
          </Link>
          
          <Link to="/Signin" className="btn-blue">
            Sign in
          </Link>
        </nav>
      </div>
    </div>
  );
}