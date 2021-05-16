import axios from 'axios';
import { reqOptions, apiURL } from './common';

export const postJob = async (jobData:any,token: any) => {
    return await axios.post(`${url}/jobs/create`,jobData ,{
        withCredentials: true,
        headers: {
            authorization: 'Bearer ' + token
        },
	});
};

export const getJob = async (token: any) => {
    return await axios.get(`${url}/jobs/` ,{
        withCredentials: true,
        headers: {
            authorization: 'Bearer ' + token
        },
	});
};