import React, { useState, useEffect } from "react";
import "../InstitutionForm.css"; // Ensure the correct path to your CSS file
import institutionLogo from "../assets/pop.png"; // Adjust the path as necessary

const InstitutionForm = () => {
  const [formData, setFormData] = useState({
    institutionId: "",
    status: "normal", // Default value
    maxNbrOfUsers: "",
    maxNbrOfProtocols: "",
    maxNbrOfChannels: "",
    maxTps: ""
  });

  useEffect(() => {
    document.body.classList.add('inst-body');
    return () => {
      document.body.classList.remove('inst-body');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const handleCancel = () => {
    // Add functionality for cancel button
  };

  return (
    <div className="inst-form-container">
      <img src={institutionLogo} alt="Institution Logo" className="inst-logo" />
      <div className="inst-form-wrapper">
        <h2>Institution Form</h2>
        <form onSubmit={handleSubmit} className="inst-form">
          <div className="inst-form-group">
            <label htmlFor="institutionId">Institution ID</label>
            <input

              type="text"
              id="institutionId"
              name="institutionId"
              value={formData.institutionId}
              onChange={handleChange}
              required
            />

          </div>
          <div className="inst-form-group">
            <label>Status</label>
            <div className="inst-radio-group">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="normal"
                  checked={formData.status === 'normal'}
                  onChange={handleChange}
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="canceled"
                  checked={formData.status === 'canceled'}
                  onChange={handleChange}
                />
                Canceled
              </label>
            </div>
          </div>
          <div className="inst-form-group">
            <label htmlFor="maxNbrOfUsers">Max Number of Users</label>
            <input
              type="number"
              id="maxNbrOfUsers"
              name="maxNbrOfUsers"
              value={formData.maxNbrOfUsers}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inst-form-group">
            <label htmlFor="maxNbrOfProtocols">Max Number of Protocols</label>
            <input
              type="number"
              id="maxNbrOfProtocols"
              name="maxNbrOfProtocols"
              value={formData.maxNbrOfProtocols}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inst-form-group">
            <label htmlFor="maxNbrOfChannels">Max Number of Channels</label>
            <input
              type="number"
              id="maxNbrOfChannels"
              name="maxNbrOfChannels"
              value={formData.maxNbrOfChannels}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inst-form-group">
            <label htmlFor="maxTps">Max TPS</label>
            <input
              type="number"
              id="maxTps"
              name="maxTps"
              value={formData.maxTps}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inst-buttons-container">
            <button type="button" className="inst-cancel-button" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="inst-submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstitutionForm;
