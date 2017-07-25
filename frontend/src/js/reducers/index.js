import { combineReducers } from "redux"

import whiskyReducer from "./reducerWhisky"
import basketReducer from "./reducerBasket";
import userDataReducer from "./reducerLogin";
import registryDataReducer from "./reducerRegistry";

const allReducers = combineReducers({
    whiskys: whiskyReducer,
    basket: basketReducer,
    userData: userDataReducer,
    registryData: registryDataReducer
});

export default allReducers;