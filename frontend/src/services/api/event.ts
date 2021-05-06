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

export const GetEventDetails = async (token: any,eventid:string) => {
    return await axios.get(`${url}/events/event_description?id=${eventid}`, {
        withCredentials: true,
        headers: {
            authorization: 'Bearer ' + token
        },
	});
}

export const ConfirmEvent = async (token: any,eventid:any) => {
    return await axios.post(`${url}/events/confirm_event`, { id: eventid }, {
        withCredentials: true,
        headers: {
            authorization: 'Bearer ' + token
        },
	});
}

export const CancelEvent = async (token: any,eventid:any) => {
    return await axios.post(`${url}/events/cancel_event`,{ id: eventid }, {
        withCredentials: true,
        headers: {
            authorization: 'Bearer ' + token
        },
	});
}