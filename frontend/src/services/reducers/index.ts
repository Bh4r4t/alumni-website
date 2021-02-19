import { combineReducers } from 'redux';
import authReducer from './auth';
import { loadingReducer } from './common';

const reducers = combineReducers({ authReducer, loadingReducer });

export default reducers;
export type RootState = ReturnType<typeof reducers>;
