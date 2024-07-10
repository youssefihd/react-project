import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from 'react-router-dom';
import './Institution.css';


const API_URL = 'http://localhost:9090/institutions';

const Institution = () => {
  const [institutions, setInstitutions] = useState({}); 
  const [institutionName, setInstitutionName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllInstitutions();
  }, []);

  const getAllInstitutions = async () => {
    try {
      const response = await axios.get(API_URL);
      const institutionsObject = response.data.reduce((acc, institution) => {
        acc[institution.institution_id] = institution;
        return acc;
      }, {});
      setInstitutions(institutionsObject);
    } catch (error) {
      console.error('Error fetching institutions:', error);
    }
  };

  const deleteInstitution = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      const updatedInstitutions = { ...institutions };
      delete updatedInstitutions[id];
      setInstitutions(updatedInstitutions);
    } catch (error) {
      console.error('Error deleting institution:', error);
    }
  };

  const searchInstitution = async () => {
    try {
      const response = await axios.get(`${API_URL}/search?name=${institutionName}`);
      const institutionsObject = response.data.reduce((acc, institution) => {
        acc[institution.institution_id] = institution;
        return acc;
      }, {});
      setInstitutions(institutionsObject);
    } catch (error) {
      console.error('Error searching institution:', error);
    }
  };

  const navigateToCreateInstitution = () => {
    navigate('/create-institution');
  };

  const navigateToUpdateInstitution = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="institution-manager">
      <div className="input-section">
        <InputText
          type="text"
          placeholder="Search by Institution Name"
          value={institutionName}
          onChange={(e) => setInstitutionName(e.target.value)}
        />
        <button onClick={searchInstitution}>Search</button>
        <button onClick={navigateToCreateInstitution}>Add</button>
        <button onClick={() => setInstitutionName('')}>Clear</button>
      </div>
      <div className="institution-list">
        <table className="institution-table">
          <thead>
            <tr>
              <th>Institution Name</th>
              <th>Status</th>
              <th>Max Number of Users</th>
              <th>Max Number of Protocols</th>
              <th>Max Number of Channels</th>
              <th>Max TPS</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(institutions).map((institution) => (
              <tr key={institution.institution_id}>
                <td>{institution.name}</td>
                <td>{institution.status}</td>
                <td>{institution.max_nbr_of_users}</td>
                <td>{institution.max_nbr_of_protocols}</td>
                <td>{institution.max_nbr_of_channels}</td>
                <td>{institution.max_tps}</td>
                <td>
                <button style={{ backgroundColor: '#007bff', color: 'white' }} onClick={() => navigateToUpdateInstitution(institution.institution_id)}>Update</button>
                <button style={{ backgroundColor: '#dc3545', color: 'white' }} className="delete" onClick={() => deleteInstitution(institution.institution_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Institution;

 
