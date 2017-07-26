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
import Login from "./pages/login";
import Admin from "./pages/admin";
import store from "./store";

//const store = createStore(allReducers);
const app = document.getElementById('app');

/**
 * React dom with all routes. Layout is specified in /pages/layout.js, navigation in
 * /components/layout/navbar.js
 */
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}/>
                <Route path="all(/:whiskey)" name="all" component={WhiskyDisplayAll}/>
                <Route path="scotch(/:whiskey)" name="scotch" component={WhiskyDisplayScotch}/>
                <Route path="search" name="search" component={Search}/>
                <Route path="cashout" name="cashout" component={Cashout}/>
                <Route path="login" name="login" component={Login}/>
                <Route path="admin" name="admin" component={Admin}/>
            </Route>
        </Router>
    </Provider>,
    app);