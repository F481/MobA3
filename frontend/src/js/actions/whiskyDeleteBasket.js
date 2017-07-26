/**
 * Simple action to delete whisky from basket in reducerBasket.js
 * @param whisky
 * @returns {{type: string, payload: *}}
 */
export const deleteWhiskyFromBasket = (whisky) => {
    console.log("Whisky has been deleted from basket: ", whisky.name);
    return {
        type: 'WHISKY_DELETED',
        payload: whisky
    }
};
