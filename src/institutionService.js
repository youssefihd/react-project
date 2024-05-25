import axios from 'axios';

const API_URL = 'http://localhost:8080/institutions';

const createInstitution = (institution) => {
  return axios.post(`${API_URL}/create`, institution, { withCredentials: true }); 
};

const readInstitution = (id) => {
  return axios.get(`${API_URL}/${id}`, { withCredentials: true }); 
};

const updateInstitution = (id, institution) => {
  return axios.put(`${API_URL}/${id}`, institution, { withCredentials: true }); 
};

const deleteInstitution = (id) => {
  return axios.delete(`${API_URL}/${id}`, { withCredentials: true }); 
};

export { createInstitution, readInstitution, updateInstitution, deleteInstitution };
