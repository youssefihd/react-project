import axios from 'axios';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Card } from 'primereact/card';
import log from "../assets/ep12.png";

const ProtocolDefinitionForm = () => {
  const [formData, setFormData] = useState({
    id: {
      institutionId: '',
      protocolId: ''
    },
    creationUser: '',
    creationDate: null,
    lastModifUser: '',
    lastModifDate: null,
    description: '',
    protocolVersion: '',
    protocolHeader: '',
    bitmapType: '',
    numberOfFields: 0
  });

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
          institutionId: formData.id.institutionId,
          protocolId: formData.id.protocolId
        },
        creationUser: formData.creationUser,
        creationDate: formData.creationDate,
        lastModifUser: formData.lastModifUser,
        lastModifDate: formData.lastModifDate,
        description: formData.description,
        protocolVersion: formData.protocolVersion,
        protocolHeader: formData.protocolHeader,
        bitmapType: formData.bitmapType,
        numberOfFields: formData.numberOfFields
      };

      const api = 'http://localhost:9090/api/protocol-definitions';
      const response = await axios.post(api, payload);
      console.log('Protocol definition created successfully:', response.data);
      // Réinitialisation du formulaire après soumission réussie
      setFormData({
        id: {
          institutionId: '',
          protocolId: ''
        },
        creationUser: '',
        creationDate: null,
        lastModifUser: '',
        lastModifDate: null,
        description: '',
        protocolVersion: '',
        protocolHeader: '',
        bitmapType: '',
        numberOfFields: 0
      });
    } catch (error) {
      console.error('Error creating protocol definition:', error.response ? error.response.data : error.message);
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
            <Card title="Protocol Definition" subTitle="Create a Protocol Definition" className="md:w-25rem">
              <p>Please fill the form below!</p>
              <div className="input-container">
                <span className="p-float-label">
                  <InputText id="institutionId" name="id.institutionId" value={formData.id.institutionId} onChange={handleChange} maxLength="3" required />
                  <label htmlFor="institutionId">Institution ID</label>
                </span>
                <span className="p-float-label">
                  <InputText id="protocolId" name="id.protocolId" value={formData.id.protocolId} onChange={handleChange} maxLength="16" required />
                  <label htmlFor="protocolId">Protocol ID</label>
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
                <InputText id="description" name="description" value={formData.description} onChange={handleChange} maxLength="256" required />
                <label htmlFor="description">Description</label>
              </span>
              <span className="p-float-label">
                <InputText id="protocolVersion" name="protocolVersion" value={formData.protocolVersion} onChange={handleChange} maxLength="64" required />
                <label htmlFor="protocolVersion">Protocol Version</label>
              </span>
              <span className="p-float-label">
                <InputText id="protocolHeader" name="protocolHeader" value={formData.protocolHeader} onChange={handleChange} maxLength="64" required />
                <label htmlFor="protocolHeader">Protocol Header</label>
              </span>
              <span className="p-float-label">
                <InputText id="bitmapType" name="bitmapType" value={formData.bitmapType} onChange={handleChange} maxLength="3" required />
                <label htmlFor="bitmapType">Bitmap Type</label>
              </span>
              <span className="p-float-label">
                <InputNumber id="numberOfFields" name="numberOfFields" value={formData.numberOfFields} onChange={(e) => setFormData({ ...formData, numberOfFields: e.value })} required />
                <label htmlFor="numberOfFields">Number of Fields</label>
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

export default ProtocolDefinitionForm;
