import axios from 'axios';
import {
	setInLS,
	getAccessToken,
	getRefreshToken,
	clearLS,
	// setHeader,
} from './middelware';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
	(config) => {
		const token = getAccessToken();
		if (token !== undefined) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		config.headers['Content-Type'] = 'application/json';
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

// axios.interceptors.response.use((response) => {

// })

export default axiosInstance;
