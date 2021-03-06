import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Footer from "../components/Footer/Footer.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import Card from "../components/Card/Card.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";
import CustomInput from "../components/CustomInput/CustomInput.jsx";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

import image from "../../assets/img/bg7.jpg";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form action="http://localhost:3000/api/users/signup" method="POST" className={classes.form}>
                    <CardHeader color="success" className={classes.cardHeader}>
                      <h2>Registro</h2>
                    </CardHeader>
                    <CardBody>
                      <CustomInput 
                        labelText="Nombres"
                        id="Nombres"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name: "Nombres",
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput 
                        labelText="Apellidos"
                        id="Apellidos"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name: "Apellidos",
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput 
                        labelText="Dni"
                        id="Dni"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name: "Dni",
                          type: "folder",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                fingerprint
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput 
                        labelText="Cui"
                        id="Cui"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          name: "Cui",
                          type: "folder",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                fingerprint
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput 
                        labelText="Contraseña"
                        id="Password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{ 
                          name: "Password",
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />

                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" color="success" size="lg">
                        Registrarse
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(RegisterPage);
