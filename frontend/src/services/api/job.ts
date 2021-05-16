import axios from 'axios';
import { reqOptions, apiURL } from './common';

export const getJob = async () => {
    return await axios.get('http://localhost:3000/jobs', {

	});
};