import React from 'react';
import '../css/style.css';
import '../App.css';
import { Link } from 'react-router-dom';

export function Footer(){
    return(
        <>
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

