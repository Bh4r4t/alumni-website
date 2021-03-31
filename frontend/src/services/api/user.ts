import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export let url = process.env.REACT_APP_SERVER_URL;

export const initDetailsStd = async (payload: any, token: string) => {
	return await axios.post(`${url}/user/init_me_std`, payload, {
		withCredentials: true,
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};

export const initDetailsFaculty = async (payload: any, token: string) => {
	return await axios.post(`${url}/user/init_me_faculty`, payload, {
		withCredentials: true,
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};