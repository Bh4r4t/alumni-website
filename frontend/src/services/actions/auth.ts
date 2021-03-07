import { Dispatch } from 'redux';
import { logoutUser, refreshToken } from '../api/auth';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';

export const checkAuthAction = () => async (dispatch: Dispatch) => {
	try {
		const res = await refreshToken();
		if (res?.data?.error === true) {
			throw new Error(res.data.message);
		}
		dispatch({ type: LOGIN_SUCCESS, payload: res });
	} catch (error) {
		console.log(error.message);
	}
};

export const logoutAction = () => async (dispatch: Dispatch) => {
	try {
		const res = await logoutUser();
		if (res?.data?.error === true) {
			throw new Error(res.data.message);
		}
		dispatch({ type: LOGOUT_SUCCESS, payload: undefined });
	} catch (error) {
		console.log(error.message);
	}
};
