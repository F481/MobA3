import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {Provider} from 'react-redux';

import Home from "./pages/home";
import WhiskyDisplayAll from "./pages/whiskyDisplayAll";
import WhiskyDisplayScotch from "./pages/whiskyDisplayScotch";
import Layout from "./pages/layout";
import Search from "./pages/search";
import Cashout from "./pages/cashout";
import allReducers from "./reducers/index";
import store from "./store";
//import {createStore} from "redux";

//const store = createStore(allReducers);
const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="all(/:whiskey)" name="all" component={WhiskyDisplayAll}></Route>
                <Route path="scotch(/:whiskey)" name="scotch" component={WhiskyDisplayScotch}></Route>
                <Route path="search" name="search" component={Search}></Route>
                <Route path="cashout" name="cashout" component={Cashout}></Route>
            </Route>
        </Router>
    </Provider>,
    app);

/*
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={WhiskyDisplay}></IndexRoute>
                <Route path="archives(/:article)" name="archives" component={Archives}></Route>
                <Route path="settings" name="settings" component={Suche}></Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('root'),
    app);

 */