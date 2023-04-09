import  React  from 'react';
import {LandingNavbar} from './Navbar';

function Signin(){
    return(
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* ----------------SEO-Optimization---------------- */}
    <meta
        name="“description”"
        content="Owen Paznokas, a designer and photographer in Bellingham, Washington. Offers designs, photography, graphic 
        designer, film editor, layout and editing."
    />
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
    {/* FIREBASE */}
    {/* Bar */}
    <LandingNavbar/>
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
    {/* Login Section */}
    <section className="login">
        <div className="container">
        <div className="login-box">
            <div className="login-text">
            <h2>
                <span>Sign in</span> to your account now!
            </h2>
            <p>
                If you don't have an account you can <a href="#">register here!</a>
            </p>
            </div>
            <div className="login-form">
            <div>
                <form name="login" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" defaultValue="login" />
                <div className="login-item">
                    <input
                    type="email"
                    name="Email Address"
                    id="email"
                    className="input"
                    placeholder="Email Address"
                    required=""
                    />
                </div>
                <div className="login-item">
                    <input
                    type="text"
                    name="Password"
                    id="password"
                    className="input"
                    placeholder="Password"
                    required=""
                    />
                </div>
                <div className="login-feature">
                    <div className="login-link">
                    <a href="#">Forgot Password</a>
                    </div>
                    <div className="login-submit">
                    <input
                        type="submit"
                        defaultValue="Login"
                        className="btn-submit"
                    />
                    </div>
                </div>
                <div className="login-feature" id="login-feature">
                    <div className="login-link">
                    <a href="#">
                        If you don't have an account, you can sign up now
                    </a>
                    </div>
                    <div className="login-submit">
                    <input
                        type="submit"
                        defaultValue="Sign Up"
                        className="btn-submit2"
                    />
                    </div>
                </div>
                </form>
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
export default Signin;