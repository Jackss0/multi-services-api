import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "../assets/scss/material-kit-react.scss?v=1.4.0";

//importando landing page
import LandingPage from "./views/LandingPage/LandingPage.jsx";


var hist = createBrowserHistory();


render(
  <Router history={hist}>
  <LandingPage/>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
    </Switch>
  </Router>
  ,document.getElementById('root'));
