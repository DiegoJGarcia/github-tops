import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE;

const instance = axios.create({
	baseURL: API_URL
});

export default instance;
