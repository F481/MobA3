export const addWhiskyToBasket = (whisky) => {
    console.log("Whisky has been added to basket: ", whisky.name);
    return {
        type: 'WHISKY_ADDED',
        payload: whisky
    }
};
