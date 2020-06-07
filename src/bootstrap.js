import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Route, Router, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import reducers from "./reducers";




const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension() ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";

import history from './history';
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import Account from "./components/account/account";
import Shop from "./components/shop/shop";




function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout> 
          <Switch>
            <Route path= '/' exact component={SignIn} />
            <Route path= '/signin' component={SignIn} />
            <Route path= '/signup' component={SignUp} />
            <Route path= '/account'component={Account} />
            <Route path= '/shop'component={Shop} />

          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
