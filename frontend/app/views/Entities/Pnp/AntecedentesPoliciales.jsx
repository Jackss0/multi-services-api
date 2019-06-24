
import React, { Component } from 'react';
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import image from "../../../assets/img/bg3.jpg"; 

import Grid from "@material-ui/core/Grid";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";

import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import ReniecPDF from '../../Documents/Reniec/ActaDeNacimientoDoc'
import Button from "../../components/CustomButtons/Button.jsx";
import StripeCheckout from 'react-stripe-checkout';


class AntecedentesPolicialesView extends Component {


  constructor(props) {
    super(props)
    this.state = {
      complete: false,
      antecedentes: [],
      descripcion: []
    }
    this.submit = this.submit.bind(this);
  }


  componentWillMount() {
    const dni = localStorage.getItem('myDni');
    fetch('http://localhost:3000/api/reniec/antecedentespoliciales/' + dni,
      {
        method: "GET"
      })
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((antecedentes) => {
        //const formatData = this.formatData(antecedentes);
        console.log(antecedentes)
        //console.log(formatData)
        this.setState({ descripcion: antecedentes });
      });
  }



  formatData(data) {
    return data.Antecedentes.map((data, i) => {
      return {
        "Apellidos": data.Apellidos,
        "Fecha": data.Fecha
      }
    });
  }

  async submit(ev) {
    console.log('compra completada');
    this.setState({ complete: true });
    console.log(this.state.complete);
    return "tok_visa"
  }

  render() {

    if (this.state.complete) {
      return (
        <div style={{
            width:"auto",
            height:"960px",
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover"
          }}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <Paper >
                  <center>
                    <br />
                    <h2>Listo para descargar!!</h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button type="submit" color="info" size="lg">
                      <PDFDownloadLink document={<ReniecPDF />} fileName="Certificado_Antecedentes_Penales.pdf">
                        <label >Acta de Nacimiento</label>
                      </PDFDownloadLink>
                    </Button>
                  </center>
                </Paper>
              </Card>
            </GridItem>
          </GridContainer>
        </div >
      )
    } else {
      return (
        <div style={{
            width:"auto",
            height:"960px",
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover"
          }}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <Paper >
                  <center >
                    <br />
                    <h2>Transaccion:</h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <StripeCheckout
                      label="Pagar Certificado: s/.15.00"
                      description="Reniec: Acta de Nacimiento"
                      locale="auto"
                      name="DocuFast"
                      stripeKey="pk_test_FCPeBUUz3HatoOcISYwticUI009Lat98Hl"
                      token={this.submit}
                    />
                    <br />
                    <br />
                  </center>
                  <br />
                  <br />
                  <br />
                </Paper>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      )
    }
  }
}

export default AntecedentesPolicialesView;

