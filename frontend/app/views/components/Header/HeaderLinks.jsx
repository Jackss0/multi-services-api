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
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.jsx";
import Button from "../../components/CustomButtons/Button.jsx";

import headerLinksStyle from "../../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import Reniec from "../../../views/Entities/Reniec.jsx";


function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          hoverColor="info"
          noLiPadding
          buttonText="Entidades"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/Reniec" className={classes.dropdownLink}>
              Reniec
            </Link>,
            <Link to="/Inpe" className={classes.dropdownLink}>
              Inpe
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.navLink}
          onClick={e => e.preventDefault()}
          color="transparent"
        >
          Sobre nosotros
                    </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.navLink}
          onClick={e => e.preventDefault()}
          color="transparent"
        >
          Contactenos
                    </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.navLink}
          onClick={e => e.preventDefault()}
          color="info"
          default
        >
          Registrese
                    </Button>
      </ListItem>


    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
