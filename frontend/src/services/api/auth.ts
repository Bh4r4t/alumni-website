import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export let url = process.env.REACT_APP_SERVER_URL;

export const verifyEmail = async (payload: any) =>
	axios.post(`${url}/auth/check_signup`, payload, {
		withCredentials: true,
	});

export const registerUser = async (payload: any) =>
	axios.post(`${url}/auth/signup`, payload, {
		withCredentials: true,
	});

export const loginUser = (payload: any) => 
	axios.post(`${url}/auth/signin`, payload, {
		withCredentials: true,
	});

export const logoutUser = (token: string) =>
	axios.post(
		`${url}/auth/logout`,
		{},
		{
			withCredentials: true,
			headers: {
				authorization: `Bearer ${token}`,
			},
		}
	);

export const refreshToken = () =>
	axios.post(
		`${url}/refresh_token`,
		{},
		{
			withCredentials: true,
		}
	);
