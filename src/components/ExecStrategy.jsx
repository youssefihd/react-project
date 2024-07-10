import axios from 'axios';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Card } from 'primereact/card';
import log from "../assets/ep12.png";

const ExecStrategyForm = () => {
  const [formData, setFormData] = useState({
    id: {
      institutionId: '',
      execStrategyId: '',
      execStrategyStep: 0
    },
    creationUser: '',
    creationDate: null,
    lastModifUser: '',
    lastModifDate: null,
    description: '',
    trxRateVariation: '',
    targetedTps: 0,
    nbrOfThreads: 0,
    totalTime: 0
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
          execStrategyId: formData.id.execStrategyId,
          execStrategyStep: formData.id.execStrategyStep
        },
        creationUser: formData.creationUser,
        creationDate: formData.creationDate,
        lastModifUser: formData.lastModifUser,
        lastModifDate: formData.lastModifDate,
        description: formData.description,
        trxRateVariation: formData.trxRateVariation,
        targetedTps: formData.targetedTps,
        nbrOfThreads: formData.nbrOfThreads,
        totalTime: formData.totalTime
      };

      const api = 'http://localhost:9090/api/exec-strategies';
      const response = await axios.post(api, payload);
      console.log('Execution strategy created successfully:', response.data);
      // Réinitialisation du formulaire après soumission réussie
      setFormData({
        id: {
          institutionId: '',
          execStrategyId: '',
          execStrategyStep: 0
        },
        creationUser: '',
        creationDate: null,
        lastModifUser: '',
        lastModifDate: null,
        description: '',
        trxRateVariation: '',
        targetedTps: 0,
        nbrOfThreads: 0,
        totalTime: 0
      });
    } catch (error) {
      console.error('Error creating execution strategy:', error.response ? error.response.data : error.message);
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
            <Card title="Execution Strategy" subTitle="Create an Execution Strategy" className="md:w-25rem">
              <p>Please fill the form below!</p>
              <div className="input-container">
                <span className="p-float-label">
                  <InputText id="institutionId" name="id.institutionId" value={formData.id.institutionId} onChange={handleChange} maxLength="3" required />
                  <label htmlFor="institutionId">Institution ID</label>
                </span>
                <span className="p-float-label">
                  <InputText id="execStrategyId" name="id.execStrategyId" value={formData.id.execStrategyId} onChange={handleChange} maxLength="16" required />
                  <label htmlFor="execStrategyId">Execution Strategy ID</label>
                </span>
                <span className="p-float-label">
                  <InputNumber id="execStrategyStep" name="id.execStrategyStep" value={formData.id.execStrategyStep} onChange={(e) => setFormData({ ...formData, id: { ...formData.id, execStrategyStep: e.value } })} required />
                  <label htmlFor="execStrategyStep">Execution Strategy Step</label>
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
                <InputText id="trxRateVariation" name="trxRateVariation" value={formData.trxRateVariation} onChange={handleChange} maxLength="16" required />
                <label htmlFor="trxRateVariation">Transaction Rate Variation</label>
              </span>
              <span className="p-float-label">
                <InputNumber id="targetedTps" name="targetedTps" value={formData.targetedTps} onChange={(e) => setFormData({ ...formData, targetedTps: e.value })} required />
                <label htmlFor="targetedTps">Targeted TPS</label>
              </span>
              <span className="p-float-label">
                <InputNumber id="nbrOfThreads" name="nbrOfThreads" value={formData.nbrOfThreads} onChange={(e) => setFormData({ ...formData, nbrOfThreads: e.value })} required />
                <label htmlFor="nbrOfThreads">Number of Threads</label>
              </span>
              <span className="p-float-label">
                <InputNumber id="totalTime" name="totalTime" value={formData.totalTime} onChange={(e) => setFormData({ ...formData, totalTime: e.value })} required />
                <label htmlFor="totalTime">Total Time</label>
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

export default ExecStrategyForm;
