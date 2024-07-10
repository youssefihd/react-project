import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import './App.css';
import { createExecutionPlan } from './ExecutionPlanService.js';
import { Card } from 'primereact/card';
import log from "../assets/ep12.png";

const Channel = () => {
  const [formData, setFormData] = useState({
    institutionId: '',
    executionPlanId: '',
    creationUser: '',
    creationDate: null,
    lastModifUser: '',
    lastModifDate: null,
    description: '',
    trxMixGroup: '',
    targetedTps: 0,
    totalNbrOfTrx: 0,
    nbrOfThreads: 0,
    execStrategyId: ''
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
          institutionId: formData.institutionId,
          executionPlanId: formData.executionPlanId
        },
        creationUser: formData.creationUser,
        creationDate: formData.creationDate,
        lastModifUser: formData.lastModifUser,
        lastModifDate: formData.lastModifDate,
        description: formData.description,
        trxMixGroup: formData.trxMixGroup,
        targetedTps: formData.targetedTps,
        totalNbrOfTrx: formData.totalNbrOfTrx,
        nbrOfThreads: formData.nbrOfThreads,
        execStrategyId: formData.execStrategyId
      };

      const response = await createExecutionPlan(payload);
      console.log('Execution plan created successfully:', response.data);
    } catch (error) {
      console.error('Error creating execution plan:', error.response ? error.response.data : error.message);
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
            <Card title="Execution Plan" subTitle="Create an Execution Plan" className="md:w-25rem">
            <p>please fill the form bellow!</p>
            </Card>
            
            <div className="input-container">
              <span className="p-float-label">
                <InputText id="institutionId" name="institutionId" value={formData.institutionId} onChange={handleChange} maxLength="3" required />
                <label htmlFor="institutionId">Institution ID</label>
              </span>
              <span className="p-float-label">
                <InputText id="executionPlanId" name="executionPlanId" value={formData.executionPlanId} onChange={handleChange} required />
                <label htmlFor="executionPlanId">Execution Plan ID</label>
              </span>
            </div>
            <span className="p-float-label">
              <InputText id="description" name="description" value={formData.description} onChange={handleChange} required />
              <label htmlFor="description">Description</label>
            </span>
            <span className="p-float-label">
              <InputText id="trxMixGroup" name="trxMixGroup" value={formData.trxMixGroup} onChange={handleChange} required />
              <label htmlFor="trxMixGroup">Transaction Mix Group</label>
            </span>
            <div className="input-container">
              <span className="p-float-label">
                <InputNumber 
                  id="targetedTps" 
                  name="targetedTps"
                  value={formData.targetedTps} 
                  onChange={(e) => handleChange({ target: { name: 'targetedTps', value: e.value } })} 
                  required 
                />
                <label htmlFor="targetedTps">Targeted TPS</label>
              </span>
              <span className="p-float-label">
                <InputNumber 
                  id="totalNbrOfTrx" 
                  name="totalNbrOfTrx"
                  value={formData.totalNbrOfTrx} 
                  onChange={(e) => handleChange({ target: { name: 'totalNbrOfTrx', value: e.value } })} 
                  required 
                />
                <label htmlFor="totalNbrOfTrx">Total Number of Transactions</label>
              </span>
              <span className="p-float-label">
                <InputNumber 
                  id="nbrOfThreads" 
                  name="nbrOfThreads"
                  value={formData.nbrOfThreads} 
                  onChange={(e) => handleChange({ target: { name: 'nbrOfThreads', value: e.value } })} 
                  required 
                />
                <label htmlFor="nbrOfThreads">Number of Threads</label>
              </span>
            </div>
            <span className="p-float-label">
              <InputText id="execStrategyId" name="execStrategyId" value={formData.execStrategyId} onChange={handleChange} required />
              <label htmlFor="execStrategyId">Execution Strategy ID</label>
            </span>
            <button className="button" label="Submit" size="lg" type="submit"> {/* Ajout du type submit au bouton */}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Channel;