import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaRobot, FaCode } from 'react-icons/fa';
import { SiReact, SiTailwindcss } from 'react-icons/si';
import './Css/About.css'; // Import the CSS file
import Navbar from './Navbar';

function About() {
  const navigate = useNavigate();

  return (
    <div className="container">
            <Navbar />

      <div className="card">
        <h1 className="title">🚀 About US </h1>
        <h1 className="title">⚛️ Apex Code Review Using AI</h1>
        <p className="description">
          Apex Code is an AI-powered project developed by 
          <span className="student-name"> Rohit Kamlesh Chauhan </span> 
          and 
          <span className="student-name"> Pranav Bhosale </span>. 
          It utilizes AI to enhance coding standards and efficiency.
        </p>
        
        {/* Technologies Used */}
        <div className="section">
          <h2 className="section-title"><FaCode /> Technologies Used</h2>
          <div className="tech-list">
            <span className="tech-item"><SiReact /> React JS</span>
            <span className="tech-item"><SiTailwindcss /> Tailwind CSS</span>
            <span className="tech-item"><FaRobot /> AI Integration API</span>
          </div>
        </div>
        
        {/* AI & API Section */}
        <div className="section">
          <h2 className="section-title"><FaRobot /> AI & API Used</h2>
          <p className="description">
            This project incorporates <strong>Gemini AI</strong> API to enhance its AI-driven capabilities.
          </p>
        </div>
        
        {/* Back to Home Button */}
        <button onClick={() => navigate('/home')} className="button">
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
}

export default About;
