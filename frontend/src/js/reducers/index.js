import { combineReducers } from "redux"

import whiskyReducer from "./reducerWhisky"

const allReducers = combineReducers({
    whiskys: whiskyReducer
})

export default allReducers;