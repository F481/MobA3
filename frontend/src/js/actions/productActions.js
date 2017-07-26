
export const INIT_FETCH_PRODUCTS = 'INIT_FETCH_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
const URL = '/products';

export function initFetchProducts(){
    return {
        type: INIT_FETCH_PRODUCTS
    }
}
export function fetchProducts() {

    /**
     * Sends GET request to retrieve whisky data.
     * Response JSON is deliverd to action which will fill reducer with data.
     * Handles error in case of no respone or faulty response.
     */
    return (dispatch) => {
        dispatch(initFetchProducts());
        return fetch(URL,{
            method: 'GET'
        })
            .then(response => {
                console.log("in teching");
                if (response.status >= 200 && response.status < 300) {
                    console.log("fetching done and response ok" + response.status);
                    response.json()
                        .then(json => {
                            console.log('parsed json', json);
                            dispatch(fetchProductsSuccess(json));
                        });
                } else {
                    response.json()
                        .then(json => {
                            console.log("Error Fetching Products",json);
                            dispatch(fetchProductsError(json));
                        });
                }
            })
            .catch(
                error => {
                    error.json()
                        .then(json => {
                            console.log('parsing failed', json);
                            dispatch(fetchProductsError('Error on fetching'));
                            throw json;
                        });
                }
            );
    };
}

export function fetchProductsSuccess(products){
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: {
            products: products
        }
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: error
    }
}