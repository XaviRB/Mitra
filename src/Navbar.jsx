import React from 'react';
import './css/style.css';
import './App.css';
import { Link } from 'react-router-dom';
import mitralogo from './img/mitra-logo-02.png'; 
import mitralogolight from './img/mitra-logo-05.png';

export function Navbar() {
  return (
    <div className="bar">
      <div className="bar__content u-centered">
        <a href="index.html">
          <img className="bar__logo" src={mitralogolight} alt="logo image"/>
        </a>
        <input type="checkbox" id="inpNavToggle" />
        <label className="bar__nav-toggle" htmlFor="inpNavToggle">
          <i className="material-icons">menu</i>
        </label>
        <nav className="nav">
          <a className="nav__link" href="login-portal.html">
            Login Portal
          </a>
          <a className="nav__link" href="profile.html">
            Profile
          </a>
          <a className="nav__link" href="#">
            Help
          </a>
          <a className="btn-green" href="login-page.html">
            Sign Out
          </a>
        </nav>
      </div>
    </div>
  );
}

export function LandingNavbar() {
  return (
    <div className="bar">
      <div className="bar__content u-centered">
        <a href="index.html">
          <img className="bar__logo" src={mitralogo} alt="logo image" />
        </a>
        <input type="checkbox" id="inpNavToggle" />
        <label className="bar__nav-toggle" htmlFor="inpNavToggle">
          <i className="material-icons">menu</i>
        </label>
        <nav className="nav">
          <a className="nav__link" href="index.html" id="n1">
            Home
          </a>
          <a className="nav__link" href="login-page.html">
            Login Page
          </a>
          <a className="nav__link" href="register.html">
            Register
          </a>
          <a className="nav__link" href="login-portal.html">
            Login Portal
          </a>
          <a className="nav__link" href="profile.html">
            Profile
          </a>
          <a className="nav__link" href="#">
            Help
          </a>
          <a className="btn-blue" href="./Signin.jsx" >
            Log in 
          </a>
          <a className="btn-green" href="login-page.html">
            Sign Up
          </a>
        </nav>
      </div>
    </div>
  );
}