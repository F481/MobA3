import axios from 'axios';
export const INIT_FETCH_PRODUCTS = 'INIT_FETCH_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
const URL = 'http://localhost:3000/products';

export function initFetchProducts(){
    return {
        type: INIT_FETCH_PRODUCTS
    }
}
export function fetchProducts() {
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

                            dispatch(fetchProductsError('Error on fetching'));
                            throw error;
                        });
                }
            })
            .catch(
                error => {
                    error.json()
                        .then(json => {
                            console.log('parsing failed', error);
                            dispatch(fetchProductsError('Error on fetching'));
                            throw error;
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