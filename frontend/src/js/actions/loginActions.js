export const INIT_LOGIN ='INIT_LOGIN';
export const DO_LOGIN ='DO_LOGIN';
export const LOGIN_SUCCESS ='LOGIN_SUCCESS';
export const LOGIN_ERROR='LOGIN_ERROR';
const URL = 'http://localhost:3000/auth/login';
var data = new FormData();

export function initLogin(){
    return {
        type: INIT_LOGIN
    }
}

export function doLogin(logindata) {
    /**
     * Function sends GET request to backend, to log in user.
     * Waits for response and fires success / error actions.
     */
    return (dispatch) => {
        dispatch(initLogin());
        return fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: logindata
        })
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log("fetching done and response ok for login" + response.status);
                    response.json()
                        .then(json => {
                            console.log('parsed json for login', json);
                            dispatch(loginSuccess(json));
                        });
                }else{
                    response.json()
                        .then(json => {
                            console.log("Error on Login",json)
                            dispatch(loginError(json));
                        });
                }
            })
            .catch(
                error => {
                    error.json()
                        .then(json => {
                            console.log('error on Login', json);
                            dispatch(loginError('Error on Login'));
                            throw json;
                        });
                }
            );
    };
}

export function loginSuccess(userData) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            userData: userData
        }
    }
}

export function loginError(error) {
    return {
        type: LOGIN_ERROR,
        payload: error
    }

}