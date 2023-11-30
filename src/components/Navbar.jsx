import React, { useState, useEffect } from 'react';
import '../css/style.css';
import '../App.css';
import mitralogo from '../img/mitra-logo-02.png';
import mitralogolight from '../img/mitra-logo-05.png';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import userImage from '../img/users/Default_User.png';
//import { db } from '../Firebase';

/* REMINDER: Delete Home Link for the LandingPage (Its probably blended in with the white navbar) */

export function Navbar() {

  const navigate = useNavigate();

  const signOutUser = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      navigate("/LandingPage"); // Redirect to the landing page after sign out
    } catch (error) {
      console.log("Sign out error:", error);
    }
  };

  return (
    <div className="bar bar--solid">
      <div className="bar__content u-centered">
        <Link to="/LandingPage">
          <img className="bar__logo" src={mitralogolight} alt="logo image" />
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
          <Link className="nav__link" to="/">
            Help
          </Link>
          {/* Temporarily block-commenting this out: profile display in header
          <div className="local-user-background">
            <div className="user-image" style={{ backgroundImage: `url(${userImage})` }}></div>
          </div>*/}
          <Link onClick={signOutUser} className="btn-green">
            Sign Out
          </Link>
        </nav>
      </div>
    </div>
  );
}

export function LandingNavbar() {
  return (
    <div className="bar bar--landing">
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
          <Link to="/Registration" className="btn-green">
            Register
          </Link>
          <Link to="/Signin" className="btn-blue">
            Login Portal
          </Link>
        </nav>
      </div>
    </div>
  );
}
