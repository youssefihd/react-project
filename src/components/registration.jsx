import React, { useState } from "react";
import axios from "axios"; // Import Axios library for making HTTP requests
import Image from "../assets/redhe.png";
import Logo from "../assets/pop.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import gol from "../assets/pppp.png";

const Registration = ({ onSignInClick }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyDepartment: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Add this line
    console.log(formData); // Debugging line

    try {
      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
        console.error("Passwords do not match");
        return;
      }


// Construct the user object with the required fields
const userData = {
  first_name: formData.firstName,
  last_name: formData.lastName,
  company_department: formData.companyDepartment,
  email: formData.email,
  password: formData.password
};

      // Send registration data to the backend
      const response = await axios.post("http://localhost:3000/register", formData);
      console.log(response.data); // Handle successful registration
      // Optionally, you can redirect the user to the login page after successful registration
      onSignInClick(); // Call the parent function to switch to the login view
    } catch (error) {
      console.error("Error from backend:", error.response?.data || error.message); // Handle registration error
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <img src={Logo} alt="" style={{ width: '150px', height: 'auto', maxWidth: 'none', position: 'relative', top: '20px' }} />
          </div>
          <div className="login-center1">
            <h2>HI, WELCOME WITH US!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleSubmit}>
              <div className="registration-container">
                <div className="name-inputs">
                  <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                  <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <input type="text" placeholder="Company/Department" name="companyDepartment" value={formData.companyDepartment} onChange={handleChange} />
                <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                <div className="pass-input-div">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />


                  {showPassword ? (
          <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
        ) : (
          <FaEye onClick={() => setShowPassword(!showPassword)} />
        )}
      </div>


                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />



                <div className="login-center-buttons">
                <button type="submit">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
                </div>
              </div>
            </form>
            <p className="login1-bottom-p">Already have an account? <a href="#" onClick={onSignInClick}>Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
