import  React  from 'react';
import {LandingNavbar} from './components/Navbar';
import { useState } from 'react';
import classroom from "./img/pexels-max-fischer-5212345.jpg"
import {Footer} from './components/Footer';
import community from "./img/comunity_blue.jpg"
import guy from "./img/Guy_working.jpg"
import lady from "./img/Lady_waving.jpg"
import computer from "./img/computer.jpg"


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
               <span>Welcome to Mitra! <br /></span>
                {/* Space between welcome text and intro text. Two options*/}
                {/*<br />*/}
                Introducing <span>new</span> ways for neurodivergent individuals to establish <span>connections</span> and <span>self-advocate</span>
            </h1>
            <p>
                Mitra is a mentorship network that offers advice, support,
                development, and mentor/mentee opportunities for everyone.
                Welcome to a space where you can connect, grow, and succeed on your own terms.
            </p>
            <div className="header-button">
                <a href="#" className="btn-green">
                About Mitra
                </a>
            </div>
            </div>
            <div className="header-image">
            <img src={computer} alt="" />
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
            Login or Sign-up using our <span>portal</span> now!
        </h2>
        <p>
            Seeking a mentor, looking to mentor others, or interested in both? Mitra is here to help.
            <br />
            Mitra offers mentorship opportunities to help individuals establish meaningful connections and self-advocate in support of their personal and professional goals. 
            Login or sign-up now to explore more options. 
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
                Login to your <span>portal</span> here
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
                <div className="portal-icon" id="bg-sky-blue">
                <span className="material-symbols-outlined">person_add</span>
                </div>
            </div>
            <div className="portal-text">
                <h3>
                Sign-up and create an <span>account</span> here
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
                Create and establish strong <span>connections</span> and <span>self-advocate</span> in support of your personal and professional goals
            </h2>
            <p>
                The developers and researchers of Mitra, believe that everyone has unique strengths and talents that can be harnessed to achieve success. 
                That's why Mitra offer a range of mentorship opportunities to help 
                both mentors and mentees develop their strengths and thrive to accomplish their personal and professional goals.
            </p>
            <div className="about-details-box">
                <div className="about-detail">
                <span className="material-symbols-outlined">check_circle</span>
                <h4>Create new meaningful connections!</h4>
                </div>
                <div className="about-detail">
                <span className="material-symbols-outlined">check_circle</span>
                <h4>Self-advocate!</h4>
                </div>
                <div className="about-detail">
                <span className="material-symbols-outlined">check_circle</span>
                <h4>Improve and succeed in personal and professional goals!</h4>
                </div>
            </div>
            <div className="about-button">
                <a href="#" className="btn-green">
                Learn More
                </a>
            </div>
            </div>
            <div className="about-image">
            <img src={community} alt="" />
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
            At Mitra, we provide a platform for neurodivergent individuals to connect with mentors and peers, and to self-advocate for their personal and professional goals. 
            Our mentorship opportunities include one-on-one mentor/mentee relationships, group mentoring, and more. 
            With Mitra, individuals can gain the skills, knowledge, and connections they need to thrive and succeed in their chosen goals.
        </p>
        <div className="features-box">
            <div className="features-card">
            <div className="features-icon-box">
                <div className="features-icon">
                <span className="material-symbols-outlined">groups</span>
                </div>
            </div>
            <div className="features-text">
                <h3>Create mentor-mentee relationships</h3>
                <p> </p>
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
                <h3>Be part of a positive supportive community</h3>
                <p> </p>
            </div>
            </div>
            <div className="features-card">
            <div className="features-icon-box">
                <div className="features-icon">
                <span className="material-symbols-outlined">flowsheet</span>
                </div>
            </div>
            <div className="features-text">
                <h3>Empowering support for all types of development</h3>
                <p> </p>
            </div>
            </div>
            <div className="features-card">
            <div className="features-icon-box">
                <div className="features-icon">
                <span className="material-symbols-outlined">support_agent</span>
                </div>
            </div>
            <div className="features-text">
                <h3>Mentor and mentee matching based on shared interests and goals</h3>
                <p> </p>
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
                Learn how <span>Mitra</span> <br /> can help and support you!
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
            <img src={lady} alt="" />
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