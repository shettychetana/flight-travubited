import axios from 'axios';

const BASE_URL = 'https://tripjack.com';
const API_KEY = '610720564f329c1c-ae91-4b19-b5b0-6083cb2fb172';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        apikey: API_KEY,
    },
});

export const searchFlights = async (payload) => {
    try {
        const response = await api.post('/fms/v1/air-search-all', payload);
        return response.data;
        
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
};

export default api;
