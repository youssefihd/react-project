import { useState, useEffect } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { useParams } from 'react-router-dom';
import { Card } from 'primereact/card';
import './App.css';
import log from "../assets/ep12.png";

const EditInstitution = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: '',
    status: '',
    max_nbr_of_users: 0,
    max_nbr_of_protocols: 0,
    max_nbr_of_channels: 0,
    max_tps: 0
  });

  useEffect(() => {
    if (id) {
      fetchInstitution(id);
    }
  }, [id]);

  const fetchInstitution = async (id) => {
    try {
      const response = await axios.get(`http://localhost:9090/institutions/${id}`);
      const institutionData = response.data;
      setFormData({
        name: institutionData.name,
        status: institutionData.status,
        max_nbr_of_users: institutionData.max_nbr_of_users,
        max_nbr_of_protocols: institutionData.max_nbr_of_protocols,
        max_nbr_of_channels: institutionData.max_nbr_of_channels,
        max_tps: institutionData.max_tps
      });
    } catch (error) {
      console.error('Error fetching institution details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNumberChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value || 0
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        status: formData.status,
        max_nbr_of_users: formData.max_nbr_of_users,
        max_nbr_of_protocols: formData.max_nbr_of_protocols,
        max_nbr_of_channels: formData.max_nbr_of_channels,
        max_tps: formData.max_tps
      };

      await axios.put(`http://localhost:9090/institutions/${id}`, payload);
      console.log('Institution updated successfully');
    } catch (error) {
      console.error('Error updating institution:', error.response ? error.response.data : error.message);
    }
  };

  const statusOptions = [
    { label: 'NORMAL', value: 'NORMAL' },
    { label: 'CANCELLED', value: 'CANCELLED' }
  ];

  return (
    <div className="edit-institution">
      <div className="top-section">
        <img src={log} alt="Logo" className="logo" />
      </div>
      <div className="form-wrapper">
        <div className="form p-d-flex p-jc-center">
          <form onSubmit={handleSubmit} className="p-fluid p-formgrid p-grid">
            <Card title="Institution" subTitle="Edit Institution" className="md:w-25rem"></Card>
            <div className="input-container">
              <span className="p-float-label">
                <InputText id="name" name="name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="name">Institution Name</label>
              </span>
              <span className="p-float-label">
                <Dropdown id="status" name="status" value={formData.status} options={statusOptions} onChange={handleChange} required />
                <label htmlFor="status">Status</label>
              </span>
            </div>
            <div className="input-container">
              <span className="p-float-label">
                <InputNumber 
                  id="max_nbr_of_users" 
                  name="max_nbr_of_users"
                  value={formData.max_nbr_of_users} 
                  onValueChange={(e) => handleNumberChange('max_nbr_of_users', e.value)} 
                  required 
                />
                <label htmlFor="max_nbr_of_users">Max Number of Users</label>
              </span>
              <span className="p-float-label">
                <InputNumber 
                  id="max_nbr_of_protocols" 
                  name="max_nbr_of_protocols"
                  value={formData.max_nbr_of_protocols} 
                  onValueChange={(e) => handleNumberChange('max_nbr_of_protocols', e.value)} 
                  required 
                />
                <label htmlFor="max_nbr_of_protocols">Max Number of Protocols</label>
              </span>
              <span className="p-float-label">
                <InputNumber 
                  id="max_nbr_of_channels" 
                  name="max_nbr_of_channels"
                  value={formData.max_nbr_of_channels} 
                  onValueChange={(e) => handleNumberChange('max_nbr_of_channels', e.value)} 
                  required 
                />
                <label htmlFor="max_nbr_of_channels">Max Number of Channels</label>
              </span>
              <span className="p-float-label">
                <InputNumber 
                  id="max_tps" 
                  name="max_tps"
                  value={formData.max_tps} 
                  onValueChange={(e) => handleNumberChange('max_tps', e.value)} 
                  required 
                />
                <label htmlFor="max_tps">Max TPS</label>
              </span>
            </div>
            <button className="button" type="submit" label="Submit" size="lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditInstitution;
