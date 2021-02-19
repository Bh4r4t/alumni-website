import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export let url = process.env.REACT_APP_SERVER_URL;
// let url = 'http://localhost:8000';

export const registerUser = (payload: any) => {
	return axios.post(`${url}/auth/signup`, payload, {
		withCredentials: true,
	});
};

export const loginUser = (payload: any) =>
	axios.post(`${url}/auth/signin`, payload, {
		withCredentials: true,
	});

export const logoutUser = () =>
	axios.post(
		`${url}/auth/logout`,
		{},
		{
			withCredentials: true,
		}
	);

export const refreshToken = () => {
	console.log(url);
	return axios.post(
		`${url}/auth/refresh_token`,
		{},
		{
			withCredentials: true,
		}
	);
};
