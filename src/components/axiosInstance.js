// axiosInstance.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9090', // Assurez-vous que c'est l'URL correcte de votre backend
    headers: {
        'Content-Type': 'application/json',
    }
});

instance.interceptors.request.use(config => {
    config.headers['Access-Control-Allow-Origin'] = 'http://localhost:5174'; // Assurez-vous que c'est l'URL correcte de votre frontend
    return config;
});

export default instance;
