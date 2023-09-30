import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { LandingNavbar } from "../components/Navbar";
import { signUp, createUserProfile, sendVerificationEmail } from "../Firebase.js";

import "../css/style.css";

// Create a new context for registration
const RegistrationContext = React.createContext();

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // Add authentication-related state to the registration context
  const registrationContextValue = {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    name,
    setName,
    error,
    setError,
    navigate,
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      console.log("Before sign up");
      const userCredential = await signUp(email, password);
      console.log("After sign up:", userCredential);
      const { user } = userCredential;
      setCurrentUser(user); // Set the currentUser state variable
      
      // Send verification email after successful sign up
      await sendVerificationEmail(user);
      console.log("Verification email sent");
  
      await createUserProfile(user.uid, {
        email,
        name,
      });
      console.log("Profile created:", user.uid);
  
      // Navigate to the home page after successful sign up
      navigate("/home"); // replace "/home" with your actual home route

    } catch (error) {
      setError(error.message);
    } finally {
      console.log("Completed handleSignUp");
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <>
      {/* ----------------SEO-Optimization---------------- */}
      {/* Include your SEO optimization code here */}
      <LandingNavbar />
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="registration">
        <div className="registration-box">
          <div className="registration-text">
            <h2>
              <span>Create</span> an account
            </h2>
            {error && <div>{error}</div>}
          </div>
          <div className="registration-form">
            {/* Provide the registration context to the nested components */}
            <RegistrationContext.Provider value={registrationContextValue}>
              <form onSubmit={handleSignUp}>
                {currentStep === 1 && (
                  <>
                    {/* Name, Email Address, Password, Confirm Password */}
                    <div className="registration-item">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </div>
                    <div className="registration-item">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="registration-item">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    <div className="registration-item">
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(event) =>
                          setConfirmPassword(event.target.value)
                        }
                        required
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="registration-submit"
                    >
                      Next
                    </button>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div>
                      <h1 className="registration-email-verfication-header"> Verify your email</h1>
                      <p className="registration-email-verfication-text"> An email was sent to the email that was provided, please verify before clicking next.</p>
                    </div>
                    <div className="loader-container">
                      <div className="loader"></div>
                    </div>

                    <button 
                      type="button" 
                      onClick={handleBack}
                      className="registration-submit-back-button"
                    >
                      Back
                    </button>

                    <button 
                      type="button" 
                      onClick={handleNext}
                      className="registration-submit"
                    >
                      Next
                    </button>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <div className="registration-text">
                      <p>
                        This website has been created by a research team at
                        Western Washington University. The purpose of this
                        website is to assess the value that a mentor/mentee
                        website can bring to the autistic community. Because of
                        this, we ask that you only continue if you have an
                        autism diagnosis and/or you self-identify as autistic.
                      </p>
                      <p>
                        Furthermore, all information provided for the use of
                        this website will be stored in a Google Firestore
                        database and will be used for the assessment and study
                        of mentor/mentee websites and their effect on the
                        autistic community.
                      </p>
                    </div>

                    <button 
                      type="button" 
                      onClick={handleBack}
                      className="registration-submit-back-button"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="registration-submit btn-submit"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </form>
            </RegistrationContext.Provider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Registration;