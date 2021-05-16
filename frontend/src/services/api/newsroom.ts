import axios from 'axios';
import { reqOptions, apiURL } from './common';

export const getRandomImage = async () =>
	await axios.get(`http://source.unsplash.com/1600x900/?beach`, reqOptions());

export const getConfPosts = async (token: any) =>
	await axios.get(`${apiURL}/newsroom/confirmed`, reqOptions(token));

export const getPendPosts = async (token: any) =>
	await axios.get(`${apiURL}/newsroom/pending`, reqOptions(token));

export const getAPost = async (id: string, token: any) =>
	await axios.get(`${apiURL}/newsroom/n/${id}`, reqOptions(token));

export const submitAPost = async (payload: any, token: any) =>
	await axios.post(`${apiURL}/newsroom/create`, payload, reqOptions(token));

	export const updateAPost = async (payload: any, token: any) =>
	await axios.post(`${apiURL}/newsroom/update`, payload, reqOptions(token));
