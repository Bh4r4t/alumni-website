import axios from 'axios';
import { reqOptions, apiURL } from './common';

export const postJob = async (jobData: any, token: any) => {
	return await axios.post(
		`${apiURL}/jobs/create`,
		jobData,
		reqOptions(token)
	);
};

export const getJob = async (token: any) => {
	return await axios.get(`${apiURL}/jobs/`, reqOptions(token));
};
