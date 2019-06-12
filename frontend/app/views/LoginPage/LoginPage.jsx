import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons

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

import RegisterPage from "../../views/LoginPage/RegisterPage.jsx";

import image from "../../assets/img/bg7.jpg";


class LoginPage extends React.Component {



  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      users: [],
      value: '',
      pwd: '',
      isloged: false,
      cardAnimaton: "cardHidden"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChange2(event) {
    this.setState({ pwd: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    localStorage.setItem('myDni', this.state.value);
    localStorage.setItem('myPwd', this.state.pwd);
    const myDni = localStorage.getItem('myDni');
    const myPwd = localStorage.getItem('myPwd');
    console.log(myDni + ' ' + myPwd)

    fetch('http://localhost:3000/api/users/' + myDni,
      {
        method: "GET"
      })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((users) => {
        this.setState({ users: users });
        console.log(users.Password)
        console.log(myPwd)
        console.log(this.state.isloged)
        if (users.Password == myPwd) {
          this.setState({ isloged: true });
        } else {
          console.log('Contraseña Incorrecta')
        }
        console.log('fin fetch: ' + this.state.isloged)
      });
      
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
    {console.log(this.state.isloged)}
    if (this.state.isloged) {
      return (<Redirect to="/LandingPageUser" />)
    } else {
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
                    <form onSubmit={this.handleSubmit} className={classes.form}>
                      <CardHeader color="info" className={classes.cardHeader}>
                        <h4>Login</h4>
                        <div className={classes.socialLine}>
                          <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={e => e.preventDefault()}
                          >
                            <i className={"fab fa-twitter"} />
                          </Button>
                          <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={e => e.preventDefault()}
                          >
                            <i className={"fab fa-facebook"} />
                          </Button>
                          <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={e => e.preventDefault()}
                          >
                            <i className={"fab fa-google-plus-g"} />
                          </Button>
                        </div>
                      </CardHeader>
                      <center>
                        <Button component={Link} to="/RegisterPage" color="info" size="lg">
                          Registrarse
                        </Button>
                      </center>

                      <p className={classes.divider}>O lo clasico</p>
                      <CardBody>
                        <CustomInput
                          labelText="Dni"
                          id="Dni"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: this.handleChange,
                            value: this.state.value,
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
                          labelText="Contraseña"
                          id="Password"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: this.handleChange2,
                            value: this.state.pwd,
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
                        <Button type="submit" color="info" size="lg">
                          Login
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
            <Footer whiteFont />
            <BrowserRouter>
              <Switch>
                <Route path="/RegisterPage" component={RegisterPage} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      );
    }
  }
}


export default withStyles(loginPageStyle)(LoginPage);
