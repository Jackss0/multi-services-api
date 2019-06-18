/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Route, Link, Switch, Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { AssignmentInd, Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.jsx";
import Button from "../../components/CustomButtons/Button.jsx";

import headerLinksStyle from "../../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import LandingPage from '../../LandingPage/LandingPage.jsx';



function HeaderLinksUser({ ...props }) {
  
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          hoverColor="info"
          noLiPadding
          buttonText="Reniec"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AssignmentInd}
          dropdownList={[
            <Link to="/Reniec" className={classes.dropdownLink}>
              Acta de Nacimiento
            </Link>,
            <Link to="/Inpe" className={classes.dropdownLink}>
              Otros
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          hoverColor="info"
          noLiPadding
          buttonText="Inpe"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AssignmentInd}
          dropdownList={[
            <Link to="/Inpe" className={classes.dropdownLink}>
              Antecedentes Penales
            </Link>,
            <Link to="/Inpe" className={classes.dropdownLink}>
              Otros
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          hoverColor="info"
          noLiPadding
          buttonText="Pnp"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AssignmentInd}
          dropdownList={[
            <Link to="/Reniec" className={classes.dropdownLink}>
              Prueba
            </Link>,
            <Link to="/Inpe" className={classes.dropdownLink}>
              Otros
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          hoverColor="info"
          noLiPadding
          buttonText="Poder Judicial"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AssignmentInd}
          dropdownList={[
            <Link to="/Reniec" className={classes.dropdownLink}>
              Prueba
            </Link>,
            <Link to="/Inpe" className={classes.dropdownLink}>
              Otros
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>

        <CustomDropdown
          hoverColor="info"
          noLiPadding
          buttonText="Cuenta"
          buttonProps={{
            className:
              classes.navLink ,
              color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <form action="http://localhost:3000/api/users/logout" method="POST" className={classes.form}>
              <center>
              <Button type="submit" className={classes.dropdownLink} color="transparent">
              logout
              </Button></center>
            </form>
          ]}
        />

      </ListItem>


    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinksUser);
