import React, { useState, useEffect } from "react";
import "../InstitutionForm.css"; // Ensure the correct path to your CSS file
import institutionLogo from "../assets/pop.png"; // Adjust the path as necessary
import { createInstitution } from '../institutionService.js';

const InstitutionForm = () => {
  const [formData, setFormData] = useState({
    institution_name: '',
    status: 'NORMAL',
    max_nbr_of_users: 0,
    max_nbr_of_protocols: 0,
    max_nbr_of_channels: 0,
    max_tps: 0,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData); // Add this line
    try {
      const response = await createInstitution(formData);
      console.log("Institution created successfully:", response.data);
    } catch (error) {
      console.error("Error creating institution:", error);
    }
  };

  const handleCancel = () => {
    setFormData({
      institution_name: '',
      status: 'NORMAL',
      max_nbr_of_users: 0,
      max_nbr_of_protocols: 0,
      max_nbr_of_channels: 0,
      max_tps: 0,
    });
  };

  return (
    <div className="inst-form-container">
      <img src={institutionLogo} alt="Institution Logo" className="inst-logo" />
      <div className="inst-form-wrapper">
        <h2>Institution Form</h2>
        <form onSubmit={handleSubmit} className="inst-form">
          <div className="inst-form-group">
            <label htmlFor="institution_name">Institution Name</label>
            <input
              type="text"
              id="institution_name"
              name="institution_name"
              value={formData.institution_name}
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
                  value="NORMAL"
                  checked={formData.status === 'NORMAL'}
                  onChange={handleChange}
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="CANCELLED"
                  checked={formData.status === 'CANCELLED'}
                  onChange={handleChange}
                />
                Canceled
              </label>
            </div>
          </div>
          <div className="inst-form-group">
            <label htmlFor="max_nbr_of_users">Max Number of Users</label>
            <input
              type="number"
              id="max_nbr_of_users"
              name="max_nbr_of_users"
              value={formData.max_nbr_of_users}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inst-form-group">
            <label htmlFor="max_nbr_of_protocols">Max Number of Protocols</label>
            <input
              type="number"
              id="max_nbr_of_protocols"
              name="max_nbr_of_protocols"
              value={formData.max_nbr_of_protocols}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inst-form-group">
            <label htmlFor="max_nbr_of_channels">Max Number of Channels</label>
            <input
              type="number"
              id="max_nbr_of_channels"
              name="max_nbr_of_channels"
              value={formData.max_nbr_of_channels}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inst-form-group">
            <label htmlFor="max_tps">Max TPS</label>
            <input
              type="number"
              id="max_tps"
              name="max_tps"
              value={formData.max_tps}
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
