import  React  from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';

function Home(){
    return(
        <>
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
        <Footer />
    </>
    );
    }
    export default Home;