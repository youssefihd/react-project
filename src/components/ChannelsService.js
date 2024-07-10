import axios from 'axios';

const API_URL = 'http://localhost:9090/api/channels';

const createChannel = (institution) => {
    return axios.post(`${API_URL}/create`, institution);
};

const readChannel = (institutionId, channelId) => {
    return axios.get(`${API_URL}/${institutionId}/${channelId}`);
};

const updateChannel = (institutionId, channelId, institution) => {
    return axios.put(`${API_URL}/${institutionId}/${channelId}`, institution);
};

const deleteChannel = (institutionId, channelId) => {
    return axios.delete(`${API_URL}/${institutionId}/${channelId}`);
};

const getAllChannles = () => {
    return axios.get(`${API_URL}/all`);
};

export { createChannel, readChannel, updateChannel, deleteChannel, getAllChannles };