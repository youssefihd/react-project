import React, { useState } from "react";
import axios from "axios";
import Image from "../assets/redhe.png";
import Logo from "../assets/pop.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import gol from "../assets/pppp.png";

const Login = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      // Handle successful login (e.g., store token, redirect)
      console.log("Login successful:", response.data);
      setError(""); // Clear error on successful login
    } catch (error) {
      // Handle errors (display error messages)
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-main">
      <img src={gol} alt="Logo" className="gol" />
      <div className="login-left">
        <div className="line"></div>
        <div className="text-container">
          <span className="feel-good-text">Feel good<br/>about<br/>Payments</span>
          <p className="additional-text"><strong>E-Pay:</strong> Global leaders in innovative payment solutions<br/>with PowerCARD, trusted worldwide.</p>
        </div>
        <img src={Image} alt="" />
        <a href="https://www.hps-worldwide.com/about-hps" target="_blank" rel="noopener noreferrer">
          <button className="more-about-button">More about E-Pay</button>
        </a>
      </div>

      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" style={{ width: '150px', height: 'auto', maxWidth: 'none', position: 'relative', top: '20px' }}  />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Don't have an account? <a href="#" onClick={onSignUpClick}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
