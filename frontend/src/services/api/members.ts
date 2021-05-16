import axios from 'axios';
import { reqOptions, apiURL } from './common';

export const memberSearch = async (token: any) =>
	await axios.get(`${apiURL}/members`, reqOptions(token));

export const getMembers = async (q: string, token: any) =>
	await axios.get(`${apiURL}/members/all/:${q}`, reqOptions(token));

export const getAllComps = async (token: any) =>
	await axios.get(`${apiURL}/members/all_comps`, reqOptions(token));