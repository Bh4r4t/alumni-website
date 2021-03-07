import axios from './common';
import * as dotenv from 'dotenv';
import { clearLS, setInLS, setHeader } from './middelware';

dotenv.config();

export let url = process.env.REACT_APP_SERVER_URL;

export const registerUser = (payload: any) => {
	return axios.post(`${url}/auth/signup`, payload, {
		withCredentials: true,
	});
};

export const loginUser = (payload: any) =>
	axios
		.post(`${url}/auth/signin`, payload, {
			withCredentials: true,
		})
		.then((response) => {
			if (response?.data?.error !== 'true') {
				setInLS(
					response?.data?.accesstoken,
					response?.data?.refreshtoken
				);
			}
			return response;
		});

export const logoutUser = () =>
	axios
		.post(
			`${url}/auth/logout`,
			{},
			{
				withCredentials: true,
			}
		)
		.then((response) => {
			console.log(response.data)
			if (response?.data?.error !== 'true') {
				clearLS();
			}
			return response;
		});

export const refreshToken = () => {
	return axios.post(
		`${url}/auth/refresh_token`,
		{},
		{
			withCredentials: true,
		}
	);
};
