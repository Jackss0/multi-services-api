import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Footer from "../components/Footer/Footer.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import Parallax from "../components/Parallax/Parallax.jsx";

import HeaderLinksUser from '../../views/components/Header/HeaderLinksUser.jsx';
import Header from "../../views/components/Header/Header.jsx";

import LoginPage from "../../views/LoginPage/LoginPage.jsx";
import RegisterPage from "../../views/LoginPage/RegisterPage.jsx";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPageUser extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div>
          <Header
            color="transparent"
            brand="MultiServices APIs"
            fixed
            rightLinks={<HeaderLinksUser />}
            changeColorOnScroll={{
              height: 400,
              color: "white"
            }}
          />
        </div>
        <Parallax filter image={require("../../assets/img/documents-bg2.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <center>
                  <h1 className={classes.title}>Ahora todas tus consultas se haran online</h1></center>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPageUser);
