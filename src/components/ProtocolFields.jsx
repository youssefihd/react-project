import axios from 'axios';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Card } from 'primereact/card';
import log from "../assets/ep12.png";

const ProtocolFieldsForm = () => {
  const [formData, setFormData] = useState({
    id: {
      institutionId: '',
      protocolId: '',
      dataElement: ''
    },
    creationUser: '',
    creationDate: null,
    lastModifUser: '',
    lastModifDate: null,
    description: '',
    lengthType: '',
    lengthSize: 0,
    dataType: '',
    dataSize: 0
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
          protocolId: formData.id.protocolId,
          dataElement: formData.id.dataElement
        },
        creationUser: formData.creationUser,
        creationDate: formData.creationDate,
        lastModifUser: formData.lastModifUser,
        lastModifDate: formData.lastModifDate,
        description: formData.description,
        lengthType: formData.lengthType,
        lengthSize: formData.lengthSize,
        dataType: formData.dataType,
        dataSize: formData.dataSize
      };

      const api = 'http://localhost:9090/api/protocol-fields';
      const response = await axios.post(api, payload);
      console.log('Protocol fields created successfully:', response.data);
      // Réinitialisation du formulaire après soumission réussie
      setFormData({
        id: {
          institutionId: '',
          protocolId: '',
          dataElement: ''
        },
        creationUser: '',
        creationDate: null,
        lastModifUser: '',
        lastModifDate: null,
        description: '',
        lengthType: '',
        lengthSize: 0,
        dataType: '',
        dataSize: 0
      });
    } catch (error) {
      console.error('Error creating protocol fields:', error.response ? error.response.data : error.message);
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
            <Card title="Protocol Fields" subTitle="Create Protocol Fields" className="md:w-25rem">
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
                <span className="p-float-label">
                  <InputText id="dataElement" name="id.dataElement" value={formData.id.dataElement} onChange={handleChange} maxLength="3" required />
                  <label htmlFor="dataElement">Data Element</label>
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
                <InputText id="lengthType" name="lengthType" value={formData.lengthType} onChange={handleChange} maxLength="6" required />
                <label htmlFor="lengthType">Length Type</label>
              </span>
              <span className="p-float-label">
                <InputNumber id="lengthSize" name="lengthSize" value={formData.lengthSize} onChange={(e) => setFormData({ ...formData, lengthSize: e.value })} required />
                <label htmlFor="lengthSize">Length Size</label>
              </span>
              <span className="p-float-label">
                <InputText id="dataType" name="dataType" value={formData.dataType} onChange={handleChange} maxLength="6" required />
                <label htmlFor="dataType">Data Type</label>
              </span>
              <span className="p-float-label">
                <InputNumber id="dataSize" name="dataSize" value={formData.dataSize} onChange={(e) => setFormData({ ...formData, dataSize: e.value })} required />
                <label htmlFor="dataSize">Data Size</label>
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

export default ProtocolFieldsForm;
