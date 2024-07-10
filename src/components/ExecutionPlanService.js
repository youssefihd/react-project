import axios from 'axios';

const API_URL = 'http://localhost:9090/api/executionplan';

const createExecutionPlan = (executionPlan) => {
    return axios.post(`${API_URL}/create`, executionPlan);
};

const readExecutionPlan = (institutionId, executionPlanId) => {
    return axios.get(`${API_URL}/${institutionId}/${executionPlanId}`);
};

const updateExecutionPlan = (institutionId, executionPlanId, executionPlan) => {
    return axios.put(`${API_URL}/${institutionId}/${executionPlanId}`, executionPlan);
};

const deleteExecutionPlan = (institutionId, executionPlanId) => {
    return axios.delete(`${API_URL}/${institutionId}/${executionPlanId}`);
};

const getAllExecutionPlans = () => {
    return axios.get(`${API_URL}/all`);
};

export { createExecutionPlan, readExecutionPlan, updateExecutionPlan, deleteExecutionPlan, getAllExecutionPlans };
