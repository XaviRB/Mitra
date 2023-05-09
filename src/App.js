import logo from './logo.svg';
import './App.css';
import LandingPage  from './LandingPage';
import Signin from './Signin';
import  React  from 'react';
import Home from './Home';
import Registration from './registration/Registration';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="/LandingPage" element={< LandingPage />} />
        <Route path="/Signin" element={< Signin />} />
        <Route path="/Home" element={< Home />} />
        <Route path="/Registration" element={< Registration />} />
      </Routes>
    </BrowserRouter>
    </>  
  );
}

export default App;
