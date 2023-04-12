import  React  from 'react';
import {LandingNavbar} from './Navbar';
import { useState } from 'react';
import classroom from "./img/pexels-max-fischer-5212345.jpg"
import {Footer} from './Footer';


function LandingPage(){
    return(
    <>
    {/* ----------------SEO-Optimization---------------- */}
    <title>Mitra</title>
    {/* Google Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"/>
    <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"/>
    {/* Google Material Icons */}
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"/>
    {/* NavBar */}
    <LandingNavbar />
    {/* Header Section */}
    <header className="header" id="header">
        <div className="container">
        <div className="header-box">
            <div className="header-text">
            <h1>
                Bringing <span>new</span> ways to student learning
            </h1>
            <p>
                Mitra is a mentorship network that offers advice, support,
                development, and mentor/mentee opportunities for everyone.
            </p>
            <div className="header-button">
                <a href="#" className="btn-green">
                About Mitra
                </a>
            </div>
            </div>
            <div className="header-image">
            <img src={classroom} alt="" />
            </div>
        </div>
        </div>
    </header>
    {/* Header Javascript */}
    {/* Have a colored ring around the profile icon/image to  */}
    {/* Portal Section */}
    <section className="portal">
        <div className="container">
        <h2>
            Login to your <span>portal</span> now
        </h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
            est ad quos?
        </p>
        <div className="portal-box">
            <div className="portal-card">
            <div className="portal-icon-box">
                <div className="portal-icon" id="bg-yellow">
                <span className="material-symbols-outlined">person</span>
                </div>
            </div>
            <div className="portal-text">
                <h3>
                Login for <span>student</span> here
                </h3>
            </div>
            <div className="portal-button-box">
                <div className="portal-button">
                <a href="#" className="btn-green" id="yellow-transparent">
                    <span>→</span>
                </a>
                </div>
            </div>
            </div>
            <div className="portal-card">
            <div className="portal-icon-box">
                <div className="portal-icon" id="bg-green">
                <span className="material-symbols-outlined">group</span>
                </div>
            </div>
            <div className="portal-text">
                <h3>
                Login for <span>mentors</span> here
                </h3>
            </div>
            <div className="portal-button-box">
                <div className="portal-button">
                <a href="#" className="btn-green" id="green-transparent">
                    <span>→</span>
                </a>
                </div>
            </div>
            </div>
            <div className="portal-card">
            <div className="portal-icon-box">
                <div className="portal-icon" id="bg-sky-blue">
                <span className="material-symbols-outlined">person_add</span>
                </div>
            </div>
            <div className="portal-text">
                <h3>
                Become a <span>member</span> here
                </h3>
            </div>
            <div className="portal-button-box">
                <div className="portal-button">
                <a href="#" className="btn-green" id="sky-blue-transparent">
                    <span>→</span>
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* About Section */}
    <section className="about">
        <div className="container">
        <div className="about-box">
            <div className="about-text">
            <h2>
                Build student experiences through <span>strength-based</span>{" "}
                trainings
            </h2>
            <p>
                Maxime, labore rem deleniti sequi adipisci dignissimos dolore
                laboriosam, quod totam esse voluptatem commodi quas. Quisquam et
                magni, veniam fugit dolor sed rem esse excepturi? At numquam
                corrupti praesentium beatae ea blanditiis!
            </p>
            <div className="about-details-box">
                <div className="about-detail">
                <span className="material-symbols-outlined">check_circle</span>
                <h4>Detail</h4>
                </div>
                <div className="about-detail">
                <span className="material-symbols-outlined">check_circle</span>
                <h4>Detail</h4>
                </div>
                <div className="about-detail">
                <span className="material-symbols-outlined">check_circle</span>
                <h4>Detail</h4>
                </div>
            </div>
            <div className="about-button">
                <a href="#" className="btn-green">
                Learn More
                </a>
            </div>
            </div>
            <div className="about-image">
            <img src={classroom} alt="" />
            </div>
        </div>
        </div>
    </section>
    {/* Features Section */}
    <section className="features">
        <div className="container">
        <h2>
            What We Provide
            <span />
        </h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
            est ad quos?
        </p>
        <div className="features-box">
            <div className="features-card">
            <div className="features-icon-box">
                <div className="features-icon">
                <span className="material-symbols-outlined">groups</span>
                </div>
            </div>
            <div className="features-text">
                <h3>Create Mentor Relationships</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </div>
            <div className="features-card">
            <div className="features-icon-box">
                <div className="features-icon">
                <span className="material-symbols-outlined">
                    cast_for_education
                </span>
                </div>
            </div>
            <div className="features-text">
                <h3>Positive Learning Environment</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </div>
            <div className="features-card">
            <div className="features-icon-box">
                <div className="features-icon">
                <span className="material-symbols-outlined">flowsheet</span>
                </div>
            </div>
            <div className="features-text">
                <h3>Feature #3</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </div>
            <div className="features-card">
            <div className="features-icon-box">
                <div className="features-icon">
                <span className="material-symbols-outlined">support_agent</span>
                </div>
            </div>
            <div className="features-text">
                <h3>24/7 Advice &amp; Support</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </div>
        </div>
        </div>
    </section>
    {/* Banner Section */}
    <section className="banner">
        <div className="container">
        <div className="banner-box">
            <div className="banner-text">
            <h2>
                Learn how <span>Mitra</span> <br /> can help your education
            </h2>
            <div className="banner-form">
                <form name="banner" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" defaultValue="banner" />
                <div className="banner-item">
                    <input
                    type="name"
                    name="Name"
                    id=""
                    className="input"
                    placeholder="Name"
                    required=""
                    />
                </div>
                <div className="banner-item">
                    <input
                    type="submit"
                    defaultValue="Submit"
                    className="btn-submit"
                    />
                </div>
                </form>
            </div>
            </div>
            <div className="banner-image">
            <img src={classroom} alt="" />
            </div>
        </div>
        </div>
    </section>
    {/* Footer Section */}
    <Footer />
    {/* Javascript */}
    </>
  );
}
export default LandingPage;