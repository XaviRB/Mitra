import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { LandingNavbar } from "../components/Navbar";
import { signUp, createUserProfile } from "../Firebase.js";
import "../css/style.css";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [role, setRole] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [interests, setInterests] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      const userCredential = await signUp(email, password);
      const { user } = userCredential;
      await createUserProfile(user.uid, {
        email,
        username,
        name,
        pronouns,
        role,
        birthYear,
        interests,
      });
      navigate("/Home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const toggleInterest = (interest) => {
    setInterests((prevState) =>
      prevState.includes(interest)
        ? prevState.filter((item) => item !== interest)
        : [...prevState, interest]
    );
  };

  return (
    <>
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
      <LandingNavbar />
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
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
            <form onSubmit={handleSignUp}>
              {currentStep === 1 && (
                <>
                  {/* Name, Pronouns, Username, Email Address, Password, Repeat Password */}
                  <div className="registration-item">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="My name is"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="registration-item">
                    <input
                      type="text"
                      name="pronouns"
                      id="pronouns"
                      placeholder="My pronouns are"
                      value={pronouns}
                      onChange={(event) => setPronouns(event.target.value)}
                      required
                    />
                  </div>
                  <div className="registration-item">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
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
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />
              </div>
              <div className="login-submit">
                      <input
                        type="submit"
                        defaultValue="Login"
                        className="btn-submit"
                      />
                    </div>
              <button type="button" onClick={handleNext} className="registration-submit"> 
                Next
              </button>
            </>
          )}

          {currentStep === 2 && (
            <>
              {/* Birth Year, Things I Like, Role */}
              <div className="registration-item">
                <label htmlFor="birthYear">Birth Year:</label>
                <input
                  type="number"
                  name="birthYear"
                  id="birthYear"
                  placeholder="My Birth Year"
                  min="1900"
                  max="2023"
                  value={birthYear}
                  onChange={(event) => setBirthYear(event.target.value)}
                  required
                />
              </div>
              <div className="registration-item">
                <label>Things I like:</label>
                <div className="interest-checkboxes">
                  {[
                     { name: "sports", label: "Sports" },
                     { name: "books", label: "Books" },
                     { name: "movies", label: "Movies" },
                     { name: "video games", label: "Video Games" },
                     { name: "exercise", label: "Exercise" },
                     { name: "programming", label: "Programming" },
                     { name: "others", label: "Others" },
                  ].map((interest) => (
                    <label key={interest.name} className="hobby-checkbox">
                      <input
                        type="checkbox"
                        name={interest.name}
                        value={interest.name}
                        checked={interests.includes(interest.name)}
                        onChange={() => toggleInterest(interest.name)}
                      />
                      <label>{interest.label}</label>
                    </label>
                  ))}
                </div>
              </div>
              <div className="registration-item">
                <div className="registration-item-role-selection">
                <label htmlFor="role">I want to be a: </label>
                <select
                  name="role"
                  id="role"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  required
                >
                  <option value="">Select a role</option>
                  <option value="mentor">Mentor</option>
                  <option value="mentee">Mentee</option>
                </select>
              </div>
              </div>
              <button type="button" onClick={handleNext}>
                Next
              </button>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="registration-text">
               <p >This website has been created by a research team at Western Washington University. The purpose of this 
                website is to assess the value that a mentor/mentee website can bring to the autistic community. Because of this, we ask that you only 
                continue if you have an autism diagnosis and/or you self identify as autistic.</p>
                <p>Furthermore, all information provided for the use of this website will be stored in a google firestore database and will be used for 
                the assessment and study of mentor/mentee websites and their effect on the autistic community.</p> 
                </div>
              <button type="submit" className="registration-submit btn-submit">Sign Up</button>
            </>
          )}
        </form>
      </div>
    </div>
  </div>
  <Footer />
</>
);
}

export default Registration;