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
                <div className="registration">
                        <div className="registration-box">
                            <div className="registration-item">
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="registration-item">
                                <input type="email" name="email" id="email" placeholder="Email Address"/>
                            </div>
                            <div className="registration-item">
                                <input type="password" name="password" id="password" placeholder="Password"/>
                            </div>
                            <div className="registration-item">
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-item">
                   <div className="registration">
                        <div className="registration-box">
                            <div className="registration-item">
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="registration-item">
                                <input type="email" name="email" id="email" placeholder="Email Address"/>
                            </div>
                            <div className="registration-item">
                                <input type="password" name="password" id="password" placeholder="Password"/>
                            </div>
                            <div className="registration-item">
                                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"/>
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