import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.4.0";

//importando pages
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import RegisterPage from "./views/LoginPage/RegisterPage.jsx";
import LandingPageUser from "./views/LandingPage/LandingPageUser.jsx";
import Reniec from "./views/Entities/Reniec/ActadeNacimiento.jsx";
import Inpe from "./views/Entities/Inpe/AntecedentesPenales.jsx";



render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/LandingPageUser" component={LandingPageUser} />
      <Route path="/Reniec" component={Reniec} />
      <Route path="/Inpe" component={Inpe} />
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/RegisterPage" component={RegisterPage} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
