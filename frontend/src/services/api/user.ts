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

export const profileUpdate = async (
	payload: any,
	token: string,
	req_type: string,
	endpoint: string
) => {
	switch (req_type) {
		case 'post':
			return await axios.post(`${url}/user/${endpoint}`, payload, {
				withCredentials: true,
				headers: {
					authorization: `Bearer ${token}`,
				},
			});

		case 'put':
			return await axios.put(`${url}/user/${endpoint}`, payload, {
				withCredentials: true,
				headers: {
					authorization: `Bearer ${token}`,
				},
			});

		case 'get':
			return await axios.get(`${url}/user/${endpoint}`, {
				withCredentials: true,
				headers: {
					authorization: `Bearer ${token}`,
				},
			});

		case 'delete':
			return await axios.delete(`${url}/user/${endpoint}`, {
				withCredentials: true,
				headers: {
					authorization: `Bearer ${token}`,
				},
			});
	}
};
