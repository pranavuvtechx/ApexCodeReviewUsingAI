import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import "./Css/Login.css";
import logo from "../assets/robot.png"; 
import {
  auth,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "../Auth/firebaseConfig";


function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Check if user is already authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home"); // Redirect if logged in
      }
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, [navigate]);

  // Validate email format
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Handle Email/Password Login
  const handleLogin = async () => {
    setErrorMessage("");

    if (!userId || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    if (!isValidEmail(userId)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, userId, password);
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      navigate("/home"); // Redirect after login
    } catch (error) {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  // Handle Google Sign-In
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/home"); // Navigate immediately
    } catch (error) {
      setErrorMessage("Google Sign-In failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="logo-heading-container">
        <img src={logo} alt="Apex Code Logo" className="login-logo" />
        <h2>Apex Code Review AI</h2>
      </div>

      <div className="login-box">
        <p className="login-info">
          Login via email or Google is supported in your region.
        </p>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="input-container">
          <input
            type="text"
            placeholder="Email address"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="login-input"
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Log in
        </button>

        <div className="login-links">
          <span className="forgot-password">Forgot password?</span>
        </div>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="google-button" onClick={handleGoogleLogin}>
          <FaGoogle className="google-icon" /> Log in with Google
        </button>
      </div>

      <p className="footer-text">
        Rohit Chauhan & Pranav Bhosale <a href="#">Contact us</a>
      </p>
    </div>
  );
}

export default Login;
