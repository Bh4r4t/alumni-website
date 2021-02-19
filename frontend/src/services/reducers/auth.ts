import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/actionTypes';

interface AuthState {
    user?: { username: string; email: string };
}

const initState: AuthState = {
    user: undefined,
};
// const initState: AuthState = { user: {username:"new", email:'new@gmail.com  '} };

function authReducer(state = initState, action: any) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return { ...initState, user: action.payload };
        }
        case LOGOUT_SUCCESS: {
            return { ...initState, user: action.payload };
        }
        default: {
            return initState;
        }
    }
}

export default authReducer;
