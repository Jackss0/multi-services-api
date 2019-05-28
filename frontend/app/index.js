import '@babel/polyfill';


import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.4.0";

//importando pages
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import Header from "./views/components/Header/Header.jsx";
import HeaderLinks from "./views/components/Header/HeaderLinks.jsx";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import RegisterPage from "./views/LoginPage/RegisterPage.jsx";


import Reniec from "../app/views/Entities/Reniec.jsx";
import Inpe from "../app/views/Entities/Inpe.jsx";


render(

  <BrowserRouter>
    <Header
      color="transparent"
      brand="MultiServices APIs"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 400,
        color: "white"
      }}
    />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/Reniec" component={Reniec} />
      <Route path="/Inpe" component={Inpe} />
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/RegisterPage" component={RegisterPage} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
