
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
          </section>
          </div>
          {/* Footer Section */}
          <Footer />
      </>
    )
  }

export default Profile   