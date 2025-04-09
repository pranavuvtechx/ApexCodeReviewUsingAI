import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Auth/firebaseConfig"; // Import Firebase Auth
import robotImage from "../assets/robot.png";
import "./Css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user"); // Optional: Clear user data
      navigate("/"); // Redirect to login screen
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={robotImage} alt="Apex Code Logo" className="nav-logo" />
        <span className="nav-name">Apex Code Review AI</span>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link className="nav-link" to="/home">Home</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
        </ul>
        {/* Logout Button */}
    
      </div>
    </nav>
  );
};

export default Navbar;
