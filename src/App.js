import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



import Home from './Screens/Home'
import About from './Screens/About'
import Login from './Screens/Login'


// import Navbar from './Screens/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
