import axios from 'axios';
import * as dotenv from 'dotenv';


dotenv.config();

export let url = process.env.REACT_APP_SERVER_URL;

export const GetPendingEvents = async (token:any) => {
    
	return await axios.get(`${url}/events/pending`, {
        withCredentials: true,
        headers: {
            authorization: 'Bearer ' + token
        },
	});
};