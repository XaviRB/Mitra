import React, {Component, useEffect, useState} from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import Sidebar from './components/sidebar/Sidebar';
import userImage from './img/users/Default_User.png';
import { HexColorPicker, HexColorInput } from "react-colorful";
import {auth, getUserColorFromFirebase, updateColorInFirebase} from "./Firebase";

function Profile() {
    const [selectedInterests, setSelectedInterests] = useState([]);

    // Initialize from Firebase to be the user's profile state.
    const [color, setColor] = useState("#aabbcc");
    const interests = ["Books", "Video Games", "Movies", "Sports", "Exercise", "Programming"];

    useEffect(() => {
        if (auth.currentUser) {
            getUserColorFromFirebase(auth.currentUser.uid)
                .then((userColor) => {
                    setColor(userColor);
                })
                .catch((error) => {
                    console.error('Error fetching user color:', error);
                });
        }
    }, []); // The empty dependency array ensures this effect runs only once on page load


    const handleProfileColorChange = (newColor) => {
        setColor(newColor);
        // Modify the value in Firebase and tell the NavBar to update
    }

    const handleInterestChange = (event) => {
        const { value } = event.target;
        setSelectedInterests(prevInterests =>
            prevInterests.includes(value)
            ? prevInterests.filter(interest => interest !== value)
            : [...prevInterests, value]
        );
    }

    const profileStyle = {
        backgroundColor: color, // Set the background color to the hex code
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto', // Center the container horizontally
    };

    return (
        <>
            <Navbar/>
            <section className="main">
                <Sidebar/>
                <div className="profile-main-content">
                    <h2>Profile</h2>
                    <div className="profile-background" style={profileStyle}>
                        <div className="profile-user-image" style={{ backgroundImage: `url(${userImage})` }}>
                        </div>
                    </div>
                    <h4>Customize Your Profile Page</h4>
                    <div className="container">
                        <div className="profile-content">
                            <div className="profile-form-box"> {/* First Box for Inputs */}
                                <div className="profile-form">
                                    <div className="profile-item">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" id="name" name="name" className="input" />
                                    </div>
                                    <div className="profile-item">
                                        <label htmlFor="pronouns">Pronouns:</label>
                                        <input type="text" id="pronouns" name="pronouns" className="input" />
                                    </div>
                                    <div className="profile-item">
                                        <label htmlFor="menteeMentor">Mentee/Mentor:</label>
                                        <input type="text" id="menteeMentor" name="menteeMentor" className="input" />
                                    </div>
                                    <div className="profile-item">
                                        <label htmlFor="profilePicture">Choose a color for your profile:</label>
                                        <div>
                                            <HexColorPicker color={color} onChange={(newColor) => handleProfileColorChange(newColor)} />
                                            <HexColorInput color={color} onChange={(newColor) => handleProfileColorChange(newColor)} />
                                        </div>
                                        <div className="profile-submit-color">
                                            <button onClick={() => updateColorInFirebase(auth.currentUser.uid, color)}>Submit Color</button>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="profile-interests-box"> {/* Second Box for Interests */}
                                <div className="profile-item">
                                    <label>Selected Interests:</label>
                                    <input type="text" value={selectedInterests.join(', ')} readOnly />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile;