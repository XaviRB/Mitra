import  React  from 'react';
import {Navbar} from './Navbar';

function Home(){
    return(
        <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* ----------------SEO-Optimization---------------- */}
        <meta name="“description”" content=""/>
        <meta
            name="keywords"
            content="Owen Paznokas, Owen, Paznokas, Designer, Photographer"
        />
        <meta name="author" content="Owen Paznokas" />
        {/* Google Site Verification */}
        <meta
            name="google-site-verification"
            content="DogpcsIsv8MfOJNDSMVMBvUm1QvIUQ4CYFODmIn3haI"
        />
        {/* ----------------SEO-Optimization---------------- */}
        <title>Mitra</title>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
            href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
        />
        {/* Google Material Icons */}
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        {/* Font Awesome */}
        {/* Stylesheet */}
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/components.css" />
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Bar */}
        <Navbar/>
        {/* Header Section */}
        {/* <header class="header" id="header">
        <div class="container">
            <div class="header-box">
                <div class="header-text">
                    <h1>Bringing <span>new</span> ways to student learning</h1>
                    <p>Mitra is a mentorship network that offers advice, support, development, and mentor/mentee opportunities for everyone.</p>
                    <div class="header-button">
                        <a href="#" class="btn-green">About Mitra</a>
                    </div>
                </div>
                <div class="header-image">
                    <img src="img/pexels-max-fischer-5212345.jpg" alt="">
                </div>
            </div>
        </div>
            </header> */}
        {/* Header Javascript */}
        {/* Main Section */}
        <section className="main">
            <div className="main-container">
            <div className="main-mentors">
                <div className="mentor-header">
                <h4>Your Mentors</h4>
                </div>
                <div className="mentor-list">
                <div className="mentor-name">
                    <h5>First Last</h5>
                    <div className="mentor-button">
                    <a href="#" className="btn-green">
                        Unmatch
                    </a>
                    </div>
                </div>
                <div className="mentor-name">
                    <h5>First Last</h5>
                    <div className="mentor-button">
                    <a href="#" className="btn-green">
                        Unmatch
                    </a>
                    </div>
                </div>
                <div className="mentor-name">
                    <h5>First Last</h5>
                    <div className="mentor-button">
                    <a href="#" className="btn-green">
                        Unmatch
                    </a>
                    </div>
                </div>
                </div>
                <div className="mentor-tab">
                <a href="#" className="btn-green">
                    View New Matches
                </a>
                </div>
            </div>
            <div className="main-content">
                <h2>Welcome to Mitra - Advice, Support, Development Website</h2>
                <h4>Created by a research team at Western Washington University</h4>
                <div className="main-box">
                <div className="main-item">
                    <h3>Our Mission:</h3>
                    <p>
                    Through ASD, we hope to provide a friendly inviting platform with
                    the purpose of linking people with Autism through a mentor to
                    mentee relationship to promote some of the strengths of Autism.
                    Our website is based off previous studies and research papers, as
                    we want you to know this website is a research project with
                    real-life impacts we hope to create. Feel free to contact us via:
                    fakeEmail@gmail.com to give us your comments/suggestions on
                    improvements we can make.
                    </p>
                    <div className="main-button">
                    <a href="#" className="btn-green">
                        Contact Us
                    </a>
                    </div>
                </div>
                <div className="main-item">
                    <h3>Website Functionality:</h3>
                    <p>
                    To use this website for it's intended purpose, we need you to
                    first create a simple account consisting of some basic information
                    such as name, email, hobbies/interests, and if you would like to
                    be a mentor or mentee. After setting up an account, you are
                    allowed to connect with other users of the website and communicate
                    with them through our chatting mechanism. We ask you to keep
                    conversations civil when communicating with other users.
                    </p>
                    <div className="main-button">
                    <a href="#" className="btn-green">
                        Contact Us
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* Footer Section */}
        <section className="footer" id="footer">
            <div className="container">
            <div className="footer-box">
                <div className="footer-box-company">
                <h3>Inquiries</h3>
                <div className="contact-form">
                    <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" defaultValue="contact" />
                    <div className="contact-item">
                        <input
                        type="name"
                        name="Name"
                        id=""
                        className="input"
                        placeholder="Name"
                        required=""
                        />
                    </div>
                    <div className="contact-item">
                        <input
                        type="email"
                        name="Email Address"
                        id=""
                        className="input"
                        placeholder="Email Address"
                        required=""
                        />
                    </div>
                    <div className="contact-item">
                        <input
                        type="tel"
                        name="Phone Number"
                        id=""
                        className="input"
                        placeholder="Phone Number"
                        required=""
                        />
                    </div>
                    <div className="contact-item">
                        <input
                        type="text"
                        name="Message"
                        id=""
                        style={{ height: "6rem" }}
                        className="input"
                        placeholder="Message"
                        required=""
                        />
                    </div>
                    <div className="contact-item">
                        <input
                        type="submit"
                        defaultValue="Submit"
                        className="btn-submit"
                        />
                    </div>
                    </form>
                </div>
                </div>
                <div className="footer-box-links">
                <h3>Site Map</h3>
                <ul>
                    <a href="index.html">
                    <li>Home</li>
                    </a>
                    <a href="design.html">
                    <li>Help</li>
                    </a>
                </ul>
                </div>
                <div className="footer-box-links">
                <h3>Login Portals</h3>
                <ul>
                    <a href="index.html">
                    <li>Mentor Portal</li>
                    </a>
                    <a href="design.html">
                    <li>Student Portal</li>
                    </a>
                    <a href="photography.html">
                    <li>Become A Member</li>
                    </a>
                </ul>
                </div>
                <div className="footer-box-links">
                <h3>Resources</h3>
                <ul>
                    <a href="index.html">
                    <li>Link</li>
                    </a>
                    <a href="design.html">
                    <li>Link</li>
                    </a>
                    <a href="photography.html">
                    <li>Link</li>
                    </a>
                </ul>
                </div>
            </div>
            </div>
        </section>
        {/* Footer Bar */}
        <section className="footer-bar">
            <div className="container">
            <h5>Copyright © 2023 Mitra - All Rights Reserved.</h5>
            </div>
        </section>
    </>
    );
    }
    export default Home;