import axios from 'axios';

const API_URL = 'http://localhost:9090/institutions';

const createInstitution = (institution) => {
    return axios.post(`${API_URL}/create`, institution);
};

const readInstitution = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const updateInstitution = (id, institution) => {
    return axios.put(`${API_URL}/${id}`, institution);
};

const deleteInstitution = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

const getAllInstitutions = () => {
    return axios.get(API_URL);
};

export { createInstitution, readInstitution, updateInstitution, deleteInstitution, getAllInstitutions };