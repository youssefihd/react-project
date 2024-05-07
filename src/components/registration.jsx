import React, { useEffect, useState } from "react";
import Image from "../assets/redhe.png";
import Logo from "../assets/hps.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import gol from "../assets/gog.png";

const Registration = ({ onSignInClick }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignInClick = () => {
    onSignInClick(); // Call parent function to switch to login
  };

  return (
    
    <div className="login-main">
      <img src={gol} alt="Logo" className="gol" />
      <div className="login-left">
        <div className="line"></div>
        <div className="text-container">
          <span className="feel-good-text">Feel good<br/>about<br/>Payments</span>
          <p className="additional-text"><strong>HPS:</strong> Global leaders in innovative payment solutions<br/>with PowerCARD, trusted worldwide.</p>
        </div>
        <img src={Image} alt="" />
        <a href="https://www.hps-worldwide.com/about-hps" target="_blank" rel="noopener noreferrer">
          <button className="more-about-button">More about HPS</button>
        </a>
      </div>






      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">




        <img src={Logo} alt="" />
      </div>
      <div className="login-center1">
        <h2>HI, WELCOME WITH US!</h2>
        <p>Please enter your details</p>
        <form>
        <div className="registration-container">
      <div className="name-inputs">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Company/Department" />
      <input type="email" placeholder="Email" />
      <div className="pass-input-div">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        {showPassword ? (
          <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
        ) : (
          <FaEye onClick={() => setShowPassword(!showPassword)} />
        )}
      </div>
      <input type="password" placeholder="Confirm Password" />


      
      <div className="login-center-buttons">
                <button type="button">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
          </div>
        </form>
      </div>
      <p className="login1-bottom-p">
  Already have an account? <a href="#" onClick={handleSignInClick}>Sign In</a>
</p>

    </div>
    </div>
    </div>
  );
};


export default Registration;
