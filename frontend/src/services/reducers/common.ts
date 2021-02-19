import { SET_LOADING } from '../actions/actionTypes';

export function loadingReducer(state = false, action: any) {
    if (action.type === SET_LOADING) {
        return action.payload;
    }
    return state;
}
