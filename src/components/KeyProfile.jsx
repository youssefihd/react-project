import axios from 'axios';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import log from "../assets/ep12.png";

const KeyProfileForm = () => {
  const [formData, setFormData] = useState({
    id: {
      institutionId: '',
      keyProfile: ''
    },
    creationUser: '',
    creationDate: null,
    lastModifUser: '',
    lastModifDate: null,
    wording: '',
    status: '',
    keyExpiryDate: null,
    keyType: '',
    keyValue: '',
    keyKcv: ''
  });

  const statusOptions = [
    { label: 'N', value: 'NORMAL' },
    { label: 'C', value: 'CANCELLED' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleStatusChange = (e) => {
    setFormData({
      ...formData,
      status: e.value
    });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      keyExpiryDate: e.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        id: {
          institutionId: formData.id.institutionId,
          keyProfile: formData.id.keyProfile
        },
        creationUser: formData.creationUser,
        creationDate: formData.creationDate,
        lastModifUser: formData.lastModifUser,
        lastModifDate: formData.lastModifDate,
        wording: formData.wording,
        status: formData.status,
        keyExpiryDate: formData.keyExpiryDate,
        keyType: formData.keyType,
        keyValue: formData.keyValue,
        keyKcv: formData.keyKcv
      };

      const api = 'http://localhost:9090/api/key-profiles';
      const response = await axios.post(api, payload);
      console.log('Key profile created successfully:', response.data);
      // Réinitialisation du formulaire après soumission réussie
      setFormData({
        id: {
          institutionId: '',
          keyProfile: ''
        },
        creationUser: '',
        creationDate: null,
        lastModifUser: '',
        lastModifDate: null,
        wording: '',
        status: '',
        keyExpiryDate: null,
        keyType: '',
        keyValue: '',
        keyKcv: ''
      });
    } catch (error) {
      console.error('Error creating key profile:', error.response ? error.response.data : error.message);
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
            <Card title="Key Profile" subTitle="Create a Key Profile" className="md:w-25rem">
              <p>Please fill the form below!</p>
              <div className="input-container">
                <span className="p-float-label">
                  <InputText id="institutionId" name="id.institutionId" value={formData.id.institutionId} onChange={handleChange} maxLength="3" required />
                  <label htmlFor="institutionId">Institution ID</label>
                </span>
                <span className="p-float-label">
                  <InputText id="keyProfile" name="id.keyProfile" value={formData.id.keyProfile} onChange={handleChange} maxLength="3" required />
                  <label htmlFor="keyProfile">Key Profile</label>
                </span>
              </div>
                <span className="p-float-label">
                  <InputText id="creationUser" name="creationUser" value={formData.creationUser} onChange={handleChange} maxLength="64" required />
                  <label htmlFor="creationUser">Creation User</label>
                </span>
                <span className="p-float-label">
                  <InputText id="lastModifUser" name="lastModifUser" value={formData.lastModifUser} onChange={handleChange} maxLength="64" required />
                  <label htmlFor="lastModifUser">Last Modification User</label>
                </span>
                <span className="p-float-label">
                  <InputTextarea id="wording" name="wording" value={formData.wording} onChange={handleChange} rows={3} maxLength="256" required autoResize />
                  <label htmlFor="wording">Wording</label>
                </span>
                <span className="p-float-label">
                  <Dropdown id="status" name="status" value={formData.status} options={statusOptions} onChange={handleStatusChange} placeholder="Select Status" required />
                  <label htmlFor="status">Status</label>
                </span>
                <span className="p-float-label">
                  <Calendar id="keyExpiryDate" name="keyExpiryDate" value={formData.keyExpiryDate} onChange={handleDateChange} dateFormat="yy-mm-dd" required />
                  <label htmlFor="keyExpiryDate">Key Expiry Date</label>
                </span>
                <span className="p-float-label">
                  <InputText id="keyType" name="keyType" value={formData.keyType} onChange={handleChange} maxLength="16" required />
                  <label htmlFor="keyType">Key Type</label>
                </span>
                <span className="p-float-label">
                  <InputText id="keyValue" name="keyValue" value={formData.keyValue} onChange={handleChange} maxLength="1024" required />
                  <label htmlFor="keyValue">Key Value</label>
                </span>
                <span className="p-float-label">
                  <InputText id="keyKcv" name="keyKcv" value={formData.keyKcv} onChange={handleChange} maxLength="16" required />
                  <label htmlFor="keyKcv">Key KCV</label>
                </span>
              <button className="button" label="Submit" size="lg" type="submit">
                Submit
              </button>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KeyProfileForm;
