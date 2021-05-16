import axios from 'axios';
import { reqOptions, apiURL } from './common';

export const initDetailsStd = async (payload: any, token: string) => {
	return await axios.post(
		`${apiURL}/user/init_me_std`,
		payload,
		reqOptions(token)
	);
};

export const initDetailsFaculty = async (payload: any, token: string) => {
	return await axios.post(
		`${apiURL}/user/init_me_faculty`,
		payload,
		reqOptions(token)
	);
};

export const profileUpdate = async (
	payload: any,
	token: string,
	req_type: string,
	endpoint: string
) => {
	switch (req_type) {
		case 'post':
			return await axios.post(
				`${apiURL}/user/${endpoint}`,
				payload,
				reqOptions(token)
			);

		case 'put':
			return await axios.put(
				`${apiURL}/user/${endpoint}`,
				payload,
				reqOptions(token)
			);

		case 'get':
			return await axios.get(
				`${apiURL}/user/${endpoint}`,
				reqOptions(token)
			);

		case 'delete':
			return await axios.delete(
				`${apiURL}/user/${endpoint}`,
				reqOptions(token)
			);
	}
};
