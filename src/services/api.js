import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackbackendweek.herokuapp.com',
});

export default api;