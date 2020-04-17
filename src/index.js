/*=========================================================
* Material Dashboard PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "./layouts/Auth.js";
import AdminLayout from "./layouts/Admin.js";

import "./assets/scss/material-dashboard-pro-react.scss";

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route path="/calcs" component={AdminLayout} />
        <Route path="/auth" component={AuthLayout} />
        <Redirect from="/" to="/auth/start-page" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
