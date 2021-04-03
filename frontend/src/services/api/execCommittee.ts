import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export let url = process.env.REACT_APP_SERVER_URL;

export const getExecCommittee = async () => {
	return await axios.get(`${url}/execCommittee/members`, {
		withCredentials: true,
	});
};

export const updateExecCommittee = async (payload: any, token: string) => {
	return await axios.post(`${url}/execCommittee/members`, payload, {
		withCredentials: true,
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
