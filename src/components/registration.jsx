import React, { useEffect, useState } from "react";
import Image from "../assets/redhe.png";
import Logo from "../assets/hps.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import gol from "../assets/gog.png";







const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="login-main">
    <img src={gol} alt="Logo" class="gol"/>
      <div className="login-left">
     



      <div className="line"></div>
      <div className="text-container">
      <span className="feel-good-text">Feel good <br/> about <br /> Payments</span>
      <p className="additional-text"><strong>HPS:</strong> Global leaders in innovative payment solutions  <br/> with PowerCARD, trusted worldwide.</p>
      
        </div>
        <img src={Image} alt="" />
        
       
        <a href="https://www.hps-worldwide.com/about-hps" target="_blank" rel="noopener noreferrer">
    <button   className="more-about-button">More about HPS</button>
  </a>
        



      </div>




      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

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
                <button type="button">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
