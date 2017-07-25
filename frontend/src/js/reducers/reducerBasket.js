
export default function (state = {
    basket: [],
}, action) {
    switch (action.type) {
        case 'WHISKY_ADDED':
            console.log("whiskey added function fired");
            var whiskyIndex = -1;
            whiskyIndex = state.findIndex(whisky => whisky.whiskyId == action.payload._id);
            if (whiskyIndex == -1) {
                return [...state, {
                    id: action.id,
                    whiskyId: action.payload._id,
                    name: action.payload.name,
                    price: action.payload.price,
                    amount: action.payload.amount,
                    basketAmount: 1
                }];
            } else {
                state[whiskyIndex].basketAmount = state[whiskyIndex].basketAmount + 1;
                return [
                    ...state
                ];
            }

        case 'WHISKY_DELETED':
            console.log("whiskey deleted function fired");
            const localBasket = state.map((whisky) => {
                if (whisky.whiskyId === action.payload.whiskyId) {
                    whisky.basketAmount = whisky.basketAmount - 1;
                    console.log(whisky.basketAmount);
                }
            });
            console.log("whiskey amount adjusted");
            var deleteIndex = -1;
            deleteIndex = state.findIndex(whisky => whisky.basketAmount < 1);
            console.log("state filtered");
            if (deleteIndex != -1) {
                return [
                    ...state.slice(0, deleteIndex),
                    ...state.slice(deleteIndex + 1)
                ];
            } else {
                return [...state];
            }

        default: {
            return [
                ...state
            ];
        }
    }
    return state;
}
