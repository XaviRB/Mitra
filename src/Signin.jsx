import  React  from 'react';
import {LandingNavbar} from './Navbar';
import {Footer} from './Footer'

function Signin(){
    return(
    <>
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
        {/* Bar */}
        <LandingNavbar/>
        {/* Header Section */}
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
        <Footer/>
    </>
  );
}
export default Signin;