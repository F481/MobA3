export const INIT_REGISTRY ='INIT_REGISTRY';
export const DO_REGISTRY ='DO_REGISTRY';
export const REGISTRY_SUCCESS ='REGISTRY_SUCCESS';
export const REGISTRY_ERROR='REGISTRY_ERROR';
const URL = '/auth/signup';


export function initRegistry(){
    return {
        type: INIT_REGISTRY
    }
}

export function doRegistry(registrydata) {

    /**
     * Function sends POST request to backend, to check in user for registry.
     * Waits for response and fires success / error actions.
     */
    return (dispatch) => {
        dispatch(initRegistry());
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: registrydata
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log("fetching done and response ok for registry" + response.status);
                    response.json()
                        .then(json => {
                            console.log('parsed json for registry', json);
                            dispatch(registrySuccess(json));
                        });
                }else{
                    response.json()
                        .then(json => {
                            console.log('Error on Registry' , json);
                            dispatch(registryError(json));
                        });
                }
            })
            .catch(
                error => {
                    error.json()
                        .then(json => {
                            console.log('error on registry', json);
                            dispatch(registryError('Error on registry'));
                        });
                }
            );
    };
}

export function registrySuccess(userData) {
    return {
        type: REGISTRY_SUCCESS,
        payload: {
            userData: userData
        }
    }
}

export function registryError(error) {
    return {
        type: REGISTRY_ERROR,
        payload: error
    }

}