import { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext();

export function useRegistration() {
  return useContext(RegistrationContext);
}

export function RegistrationProvider({ children }) {
  // Move all the state and handler functions from the Registration component here
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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Add more handler functions as needed

  const values = {
    email,
    password,
    confirmPassword,
    username,
    name,
    pronouns,
    role,
    birthYear,
    interests,
    error,
    handleEmailChange,
    handlePasswordChange,
    // Add more values and handlers as needed
  };

  return (
    <RegistrationContext.Provider value={values}>
      {children}
    </RegistrationContext.Provider>
  );
}