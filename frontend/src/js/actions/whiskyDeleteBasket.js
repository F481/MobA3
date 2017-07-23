export const deleteWhiskyFromBasket = (whisky) => {
    console.log("Whisky has been deleted from basket: ", whisky.name);
    return {
        type: 'WHISKY_DELETED',
        payload: whisky
    }
};
