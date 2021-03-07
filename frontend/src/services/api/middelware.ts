import axios, { AxiosRequestConfig } from 'axios';

export const setHeader = (token: string) => {
	return {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${token}`,
	};
};

// store token in local storage for authorisation
export const setInLS = (Accesstoken: string, RefreshToken: string) => {
	localStorage.setItem('all.id', RefreshToken);
	localStorage.setItem('connect.id', Accesstoken)
};

export const getAccessToken = () => {
	return localStorage.getItem('connect.id');
};

export const getRefreshToken = () => {
	return localStorage.getItem('all.id');
};

export const clearLS = () => {
	localStorage.removeItem('all.id');
	localStorage.removeItem('connect.id');
};
