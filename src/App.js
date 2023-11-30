import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Signin from "./Signin";
import Home from "./Home";
import Chat from "./components/chat/Chat";
import Registration from "./registration/Registration";
import Profile from "./Profile";
import { AuthProvider } from "./components/Auth";

// Create separate components for each route that needs the AuthProvider context
function HomeRoute() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

function ChatRoute() {
  return (
    <AuthProvider>
      <Chat />
    </AuthProvider>
  );
}

// Assuming you have a Profile component
function ProfileRoute() {
   return (
     <AuthProvider>
       <Profile />
    </AuthProvider>
   );
 }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Home" element={<HomeRoute />} />
        <Route path="/Chat/:chatId" element={<ChatRoute />} /> {/* Updated this line */}
        <Route path="/Profile" element={<ProfileRoute />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;