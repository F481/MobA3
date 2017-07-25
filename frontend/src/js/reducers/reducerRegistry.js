import {INIT_REGISTRY, REGISTRY_SUCCESS, REGISTRY_ERROR} from '../actions/registryActions';

const INITIAL_STATE = { error: null, fetching: false, fetched: false};

export default function reducer(state = INITIAL_STATE, action) {
    let error;
    switch (action.type){
        case INIT_REGISTRY: {
            return {...state, error: null, fetching: true, fetched: false, success: false};
        }
        case REGISTRY_SUCCESS: {
            console.log("Registry Success!!!")
            return {...state, error: null, fetching: false, fetched: true, success: true};
        }
        case REGISTRY_ERROR: {
            error = action.payload || {message: action.payload.message};
            return {...state, error: error, fetching: false, fetched: false, success: false};
        }
    }
    return state;
}