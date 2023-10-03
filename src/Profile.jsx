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
                            </div>
                            <div className="profile-info">
                                <h2>Email:</h2>
                            </div>
                            <div className="profile-info">
                                <h2>Preferred Pronouns:</h2>
                            </div>
                            <div className="profile-info">
                                <h2>Current Role:</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-item">
                   <div className="profile">
                        <div className="profile-box">
                            <div className="profile-info">
                                <h2>Bio/Introduction:</h2>
                            </div>
                            <div className="profile-info">
                               <h2>Interests/Hobbies:</h2>
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