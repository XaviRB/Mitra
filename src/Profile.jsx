import  React  from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import Sidebar from './components/sidebar/Sidebar'

function Profile() {
  return (
    <>
        <Navbar/>
        <div>
        {/* Header Section */}
        {/* Header Javascript */}
        {/* Main Section */}
        <section className="main">
            <Sidebar/>
            <div className="main-content">
                <h2>Profile</h2>
                <h4>Customize Your Profile Page</h4>
                <div className="main-box">
                <div className="main-item">
                <div className="profile">
                        <div className="profile-box">
                            <div className="profile-info">
                                <h2>Name:</h2>
                                <div className="profile-input-field">
                                    <input type="text" name="name" id="name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="profile-info">
                                <h2>Email:</h2>
                                <div className="profile-input-field">
                                    <input type="email" name="email" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="profile-info">
                                <h2>Pronouns:</h2>
                                <div className="profile-input-field">
                                    <input type="text" name="pronouns" id="pronouns" placeholder="Pronouns" />
                                </div>
                            </div>
                            <div className="profile-info">
                                <h2>Role:</h2>
                                <div className="profile-input-field">
                                    <input type="text" name="role" id="role" placeholder="Role" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-item">
                   <div className="profile">
                        <div className="profile-box">
                            <div className="profile-large-info">
                                <h2>Biography:</h2>
                                <div className="profile-large-input-field">
                                    <input name="biography" id="biography" placeholder="Biography" />
                                </div>
                            </div>
                            <div className="profile-info">
                               <h2>Interests:</h2>
                               <div className="profile-input-field">
                                    <input type="text" name="interests" id="interests" placeholder="Interests" />
                                </div>
                            </div>
                            <div className="profile-info">
                                <h2>Hobbies:</h2>
                                <div className="profile-input-field">
                                    <input type="text" name="hobbies" id="hobbies" placeholder="Hobbies" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </section>
        </div>
        {/* Footer Section */}
        <Footer />
    </>
  )
}

export default Profile   