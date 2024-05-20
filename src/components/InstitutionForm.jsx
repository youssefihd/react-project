import React, { useState } from "react";
import axios from "axios";
import "./InstitutionForm.css"; // Create this CSS file for styles

const InstitutionForm = () => {
  const [formData, setFormData] = useState({
    institution_id: "",
    status: "",
    max_nbr_of_users: "",
    max_nbr_of_protocols: "",
    max_nbr_of_channels: "",
    max_tps: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("http://localhost:3000/institutions", formData);
      setSuccess("Institution added successfully!");
      setFormData({
        institution_id: "",
        status: "",
        max_nbr_of_users: "",
        max_nbr_of_protocols: "",
        max_nbr_of_channels: "",
        max_tps: ""
      });
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="institution-form-container">
      <form onSubmit={handleSubmit} className="institution-form">
        <h2>Add Institution</h2>
        <input
          type="text"
          name="institution_id"
          placeholder="Institution ID"
          value={formData.institution_id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={formData.status}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="max_nbr_of_users"
          placeholder="Max Number of Users"
          value={formData.max_nbr_of_users}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="max_nbr_of_protocols"
          placeholder="Max Number of Protocols"
          value={formData.max_nbr_of_protocols}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="max_nbr_of_channels"
          placeholder="Max Number of Channels"
          value={formData.max_nbr_of_channels}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="max_tps"
          placeholder="Max TPS"
          value={formData.max_tps}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default InstitutionForm;
