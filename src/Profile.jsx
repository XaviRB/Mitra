
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
                  
                  <div className="container">
                      <div className="profile-box">
                          <div className="profile-text">
                          </div>
                          <div className="profile-form">
                            <div className="column">
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
                            <div className="column">
                                <div className="profile-item">
                                    <label htmlFor="student">Student:</label>
                                    <input type="text" id="student" name="student" className="input" />
                                </div>
                                <div className="profile-item">
                                    <label htmlFor="interests">Interests:</label>
                                    <input type="text" id="interests" name="interests" className="input" />
                                </div>
                                <div className="profile-item">
                                    <label htmlFor="hobbies">Hobbies:</label>
                                    <input type="text" id="hobbies" name="hobbies" className="input" />
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