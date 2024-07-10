import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import './App.css';
import log from "../assets/ep12.png";
import { createChannel } from './ChannelsService';
import { useParams } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

import { Card } from 'primereact/card';
const App = () => {
  const {institutionId,channelId} = useParams();
  const [formData, setFormData] = useState({
    institutionId: institutionId || '',
    channelId: channelId || '',
    creation_user: '',
    creation_date: null,
    last_modif_user: '',
    last_modif_date: null,
    channelGroup: '',
    wording: '',
    status: '',
    keyProfile: '',
    connectMode: '',
    channelIpAddress: '',
    channelPort: '',
    logFileName: '',
    nbrOfThreads: 0,
    channelTimeout: 0,
    echoTestTimeInt: 0,
    connectionStatus: ''
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
          channelId: formData.channelId
        },
        creationUser: formData.creation_user,
        creationDate: formData.creation_date,
        lastModifUser: formData.last_modif_user,
        lastModifDate: formData.last_modif_date,
        channelGroup: formData.channelGroup,
        wording: formData.wording,
        status: formData.status,
        keyProfile: formData.keyProfile,
        connectMode: formData.connectMode,
        channelIpAddress: formData.channelIpAddress,
        channelPort: formData.channelPort,
        logFileName: formData.logFileName,
        nbrOfThreads: formData.nbrOfThreads,
        channelTimeout: formData.channelTimeout,
        echoTestTimeInt: formData.echoTestTimeInt,
        connectionStatus: formData.connectionStatus
      };
  
      const response = await createChannel(payload);
      console.log('Channel created successfully:', response.data);
    } catch (error) {
      console.error('Error creating channel:', error.response ? error.response.data : error.message);
    }
  };
    const statusOptions = [
    { label: 'NORMAL', value: 'NORMAL' },
    { label: 'CANCELLED', value: 'CANCELLED' }
    ];
  return (
    
    <div className="header">
  <div className="top-section">
    <img src={log} alt="Logo" className="logo" />
  </div>
  <div className="form-wrapper">
    <div className="form p-d-flex p-jc-center">
      <form onSubmit={handleSubmit} className="p-fluid p-formgrid p-grid">
      <Card title="Channel" subTitle="Create a Channel" className="md:w-25rem">
</Card>
<div className="input-container">
      <span className="p-float-label">
        <InputText id="institutionId" name="institutionId" value={formData.institutionId} onChange={handleChange} required />
        <label htmlFor="institutionId">Institution ID</label>
      </span>
      <span className="p-float-label">
        <InputText id="channelId" name="channelId" value={formData.channelId} onChange={handleChange} required />
        <label htmlFor="channelId">Channel ID</label>
      </span>
    </div>
          <span className="p-float-label">
              <InputText id="channelGroup" name="channelGroup" value={formData.channelGroup} onChange={handleChange} required />
              <label htmlFor="channelGroup">Channel Group</label>
          </span>
          <span className="p-float-label">
              <InputText id="wording" name="wording" value={formData.wording} onChange={handleChange} required />
              <label htmlFor="wording">Wording</label>
            </span>
          <span className="p-float-label">
             <Dropdown id="status" name="status" value={formData.status} options={statusOptions} onChange={handleChange} required />
               <label htmlFor="status">Status</label>
          </span>
            <span className="p-float-label">
              <InputText id="keyProfile" name="keyProfile" value={formData.keyProfile} onChange={handleChange} required />
              <label htmlFor="keyProfile">Key Profile</label>
            </span>
            <span className="p-float-label">
              <InputText id="connectMode" name="connectMode" value={formData.connectMode} onChange={handleChange} required />
              <label htmlFor="connectMode">Connect Mode</label>
            </span>
            <span className="p-float-label">
              <InputText id="channelIpAddress" name="channelIpAddress" value={formData.channelIpAddress} onChange={handleChange} required />
              <label htmlFor="channelIpAddress">Channel IP Address</label>
            </span>
            <span className="p-float-label">
              <InputText id="channelPort" name="channelPort" value={formData.channelPort} onChange={handleChange} required />
              <label htmlFor="channelPort">Channel Port</label>
            </span>
            <span className="p-float-label">
              <InputText id="logFileName" name="logFileName" value={formData.logFileName} onChange={handleChange} required />
              <label htmlFor="logFileName">Log File Name</label>
            </span>
            <div className="input-container">
      <span className="p-float-label">
        <InputNumber 
          id="nbrOfThreads" 
          value={formData.nbrOfThreads} 
          onChange={(e) => handleChange({ target: { name: 'nbrOfThreads', value: e.value } })} 
          mode="decimal" 
          required 
        />
        <label htmlFor="nbrOfThreads">Number of Threads</label>
      </span>
      <span className="p-float-label">
        <InputNumber 
          id="channelTimeout" 
          value={formData.channelTimeout} 
          onChange={(e) => handleChange({ target: { name: 'channelTimeout', value: e.value } })} 
          required 
        />
        <label htmlFor="channelTimeout">Channel Timeout</label>
      </span>
      <span className="p-float-label">
        <InputNumber 
          id="echoTestTimeInt" 
          value={formData.echoTestTimeInt} 
          onChange={(e) => handleChange({ target: { name: 'echoTestTimeInt', value: e.value } })} 
          required 
        />
        <label htmlFor="echoTestTimeInt">Echo Test Time Interval</label>
      </span>
    </div>
            <span className="p-float-label">
              <InputText id="connectionStatus" name="connectionStatus" value={formData.connectionStatus} onChange={handleChange} maxLength="1" />
              <label htmlFor="connectionStatus">Connection Status</label>
            </span>
            <button className="button" label="Submit" size="lg">
      Submit
    </button>
          </form>
      </div>
    </div>
    </div>
    
  );
};

export default App;
