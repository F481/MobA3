import {INIT_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions/loginActions';

const INITIAL_STATE = {userData: {}, error: null, fetching: false, fetched: false, authenticated: false};

export default function reducer(state = INITIAL_STATE, action) {
    let error;
    switch (action.type){
        case INIT_LOGIN: {
            return {...state, userData:{}, error: null, fetching: true, fetched: false, authenticated: false};
        }
        case LOGIN_SUCCESS: {
            return {...state, userData:action.payload , error: null, fetching: false, fetched: true, authenticated: true};
        }
        case LOGIN_ERROR: {
            error = action.payload || {message: action.payload.message};
            return {...state, userData: {}, error: error, fetching: false, fetched: false, authenticated: false};
        }
    }
    return state;
}