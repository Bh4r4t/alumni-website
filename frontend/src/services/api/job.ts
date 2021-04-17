import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

export let url = process.env.REACT_APP_SERVER_URL;

export const getJob = async () => {
    return await axios.get('http://localhost:3000/jobs', {

	});
};