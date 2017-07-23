
export default function (state = {
    basket: [],
}, action) {
    switch (action.type) {
        case 'WHISKY_ADDED':
            console.log("whiskey added function fired");
            console.log(state.basket);
            return [...state, {
                id: action.id,
                whiskyId: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                amount: action.payload.amount,
                basketAmount: 1
            }];
    }
    return state;
}
