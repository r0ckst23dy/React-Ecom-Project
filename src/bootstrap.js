import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Route, Router, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import reducers from "./reducers";




const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

import history from './history';
import SignIn from "./components/auth/signin";




function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout> 
          <Switch>
            <Route path= '/' exact component={SignIn} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
