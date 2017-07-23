import { combineReducers } from "redux"

import whiskyReducer from "./reducerWhisky"
import basketReducer from "./reducerBasket";

const allReducers = combineReducers({
    whiskys: whiskyReducer,
    basket: basketReducer
});

export default allReducers;