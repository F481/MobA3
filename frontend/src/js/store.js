import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import promise from "redux-promise-middleware"
import thunk from "redux-thunk"

import reducer from "./reducers"

/**
 * Import and connect combined reducers with thunk middleware.
 * Redux store is created and exported.
 *
 * @type {GenericStoreEnhancer}
 */
const middleware = applyMiddleware(promise(), thunk, logger);
export default createStore(reducer, middleware)