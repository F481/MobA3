import { combineReducers } from "redux"

import whiskyReducer from "./reducerWhisky"
import basketReducer from "./reducerBasket";
import userDataReducer from "./reducerLogin";

const allReducers = combineReducers({
    whiskys: whiskyReducer,
    basket: basketReducer,
    userData: userDataReducer
});

export default allReducers;