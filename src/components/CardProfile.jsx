import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { useParams } from 'react-router-dom';
import './App.css';
import { Card } from 'primereact/card';
import log from "../assets/ep12.png";

const API_URL = 'http://localhost:9090/cardprofile';

const CardProfile = () => {
  const { institutionId, cardProfileId } = useParams();
  const [formData, setFormData] = useState({
    institutionId: institutionId || '',
    cardProfile: cardProfileId || '',
    creationUser: '',
    creationDate: null,
    lastModifUser: '',
    lastModifDate: null,
    cardNumber: '',
    description: '',
    status: '',
    keyProfile: '',
    expiryDate: '',
    trackI: '',
    trackII: '',
    pin: '',
    pvvData: '',
    cvv1: '',
    icvv: '',
    cvv2: ''
  });

  useEffect(() => {
    if (institutionId && cardProfileId) {
      fetchCardProfile(institutionId, cardProfileId);
    }
  }, [institutionId, cardProfileId]);

  const fetchCardProfile = async (institutionId, cardProfileId) => {
    try {
      const response = await axios.get(`${API_URL}/${institutionId}/${cardProfileId}`);
      const cardProfileData = response.data;
      setFormData({
        institutionId: cardProfileData.id.institutionId,
        cardProfile: cardProfileData.id.cardProfile,
        creationUser: cardProfileData.creationUser,
        creationDate: cardProfileData.creationDate,
        lastModifUser: cardProfileData.lastModifUser,
        lastModifDate: cardProfileData.lastModifDate,
        cardNumber: cardProfileData.cardNumber,
        description: cardProfileData.description,
        status: cardProfileData.status,
        keyProfile: cardProfileData.keyProfile,
        expiryDate: cardProfileData.expiryDate,
        trackI: cardProfileData.trackI,
        trackII: cardProfileData.trackII,
        pin: cardProfileData.pin,
        pvvData: cardProfileData.pvvData,
        cvv1: cardProfileData.cvv1,
        icvv: cardProfileData.icvv,
        cvv2: cardProfileData.cvv2
      });
    } catch (error) {
      console.error('Error fetching card profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        id: {
          institutionId: formData.institutionId,
          cardProfile: formData.cardProfile
        },
        creationUser: formData.creationUser,
        creationDate: formData.creationDate,
        lastModifUser: formData.lastModifUser,
        lastModifDate: formData.lastModifDate,
        cardNumber: formData.cardNumber,
        description: formData.description,
        status: formData.status,
        keyProfile: formData.keyProfile,
        expiryDate: formData.expiryDate,
        trackI: formData.trackI,
        trackII: formData.trackII,
        pin: formData.pin,
        pvvData: formData.pvvData,
        cvv1: formData.cvv1,
        icvv: formData.icvv,
        cvv2: formData.cvv2
      };

      console.log('Payload:', JSON.stringify(payload));

      const response = await axios.post(`${API_URL}/create`, payload);
      console.log('Card profile created successfully:', response.data);
    } catch (error) {
      console.error('Error creating card profile:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="header">
      <div className="top-section">
        <img src={log} alt="Logo" className="logo" />
      </div>
      <div className="form-wrapper">
        <div className="form p-d-flex p-jc-center">
          <form onSubmit={handleSubmit} className="p-fluid p-formgrid p-grid">
            <Card title="Card Profile" subTitle="Create a Card Profile" className="md:w-25rem"></Card>
            <div className="p-field">
              <label htmlFor="institutionId">Institution ID</label>
              <InputText
                id="institutionId"
                name="institutionId"
                value={formData.institutionId}
                onChange={handleChange}
                maxLength="3"
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="cardProfile">Card Profile</label>
              <InputText
                id="cardProfile"
                name="cardProfile"
                value={formData.cardProfile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="cardNumber">Card Number</label>
              <InputText
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="description">Description</label>
              <InputText
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="status">Status</label>
              <InputText
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="keyProfile">Key Profile</label>
              <InputText
                id="keyProfile"
                name="keyProfile"
                value={formData.keyProfile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="expiryDate">Expiry Date</label>
              <InputText
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="trackI">Track I</label>
              <InputText
                id="trackI"
                name="trackI"
                value={formData.trackI}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="trackII">Track II</label>
              <InputText
                id="trackII"
                name="trackII"
                value={formData.trackII}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="pin">PIN</label>
              <InputText
                id="pin"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="pvvData">PVV Data</label>
              <InputText
                id="pvvData"
                name="pvvData"
                value={formData.pvvData}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="cvv1">CVV1</label>
              <InputText
                id="cvv1"
                name="cvv1"
                value={formData.cvv1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="icvv">ICVV</label>
              <InputText
                id="icvv"
                name="icvv"
                value={formData.icvv}
                onChange={handleChange}
                required
              />
            </div>
            <div className="p-field">
              <label htmlFor="cvv2">CVV2</label>
              <InputText
                id="cvv2"
                name="cvv2"
                value={formData.cvv2}
                onChange={handleChange}
                required
              />
            </div>
            <button className="button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
