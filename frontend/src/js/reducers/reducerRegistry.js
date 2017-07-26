import {INIT_REGISTRY, REGISTRY_SUCCESS, REGISTRY_ERROR} from '../actions/registryActions';

const INITIAL_STATE = { error: null, fetching: false, fetched: false};

export default function reducer(state = INITIAL_STATE, action) {
    let error;
    switch (action.type){

        /**
         * Action is fired, when registry request is sent.
         * Sets state accordingly
         */
        case INIT_REGISTRY: {
            return {...state, error: null, fetching: true, fetched: false, success: false};
        }

        /**
         * Action is fired, when registry is successful.
         */
        case REGISTRY_SUCCESS: {
            console.log("Registry Success!!!")
            return {...state, error: null, fetching: false, fetched: true, success: true};
        }

        /**
         * Action fired in case of an error occurring.
         */
        case REGISTRY_ERROR: {
            error = action.payload || {message: action.payload.message};
            return {...state, error: error, fetching: false, fetched: false, success: false};
        }
    }
    return state;
}