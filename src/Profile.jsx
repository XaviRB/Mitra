import React, { useState } from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import Sidebar from './components/sidebar/Sidebar';
import userImage from './img/users/Default_User.png';

function Profile() {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const interests = ["Books", "Video Games", "Movies", "Sports", "Exercise", "Programming"];

    const handleInterestChange = (event) => {
        const { value } = event.target;
        setSelectedInterests(prevInterests => 
            prevInterests.includes(value) 
            ? prevInterests.filter(interest => interest !== value) 
            : [...prevInterests, value]
        );
    }

    return (
        <>
            <Navbar/>
            <section className="main">
                <Sidebar/>
                <div className="profile-main-content">
                    <h2>Profile</h2>
                    <div className="profile-user-image" style={{ backgroundImage: `url(${userImage})` }}></div>
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