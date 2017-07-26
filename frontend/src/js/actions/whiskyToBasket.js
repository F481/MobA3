/**
 * Simple action to add whisky to basket in reducerBasket.js
 * @param whisky
 * @returns {{type: string, payload: *}}
 */
export const addWhiskyToBasket = (whisky) => {
    console.log("Whisky has been added to basket: ", whisky.name);
    return {
        type: 'WHISKY_ADDED',
        payload: whisky
    }
};
