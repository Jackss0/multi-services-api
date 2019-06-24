
import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import image from "../../../assets/img/bg7.jpg";

import Grid from "@material-ui/core/Grid";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/Card/Card.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import InpePDF from '../../Documents/Inpe/AntecedentesPenalesDoc'
import Button from "../../components/CustomButtons/Button.jsx";
import StripeCheckout from 'react-stripe-checkout';





class Inpe extends React.Component {


  constructor() {
    super()
    this.state = { complete: false };
    this.submit = this.submit.bind(this);

  }

  componentWillMount() {
    setImmediate(() => {
      var dni = localStorage.getItem('myDni');
      fetch('http://localhost:3000/api/inpe/antecedentespenales/' + dni,
        {
          method: "GET"
        })
        .then((response) => {
          //console.log(response)
          return response.json();
        })
        .then((antecedentes) => {
          //const formatData = this.formatData(antecedentes);
          console.log(antecedentes)
          //console.log(formatData)
          this.setState({ antecedentes: antecedentes });
          localStorage.setItem('Antecedentes_id', antecedentes._id)
          localStorage.setItem('Antecedentes_Nombres', antecedentes.Nombres)
          localStorage.setItem('Antecedentes_Apellidos', antecedentes.Apellidos)
          localStorage.setItem('Antecedentes_Dni', antecedentes.Dni)
          localStorage.setItem('Antecedentes_DescripcionDelito', antecedentes.Antecedentes[0].Descripcion)
          localStorage.setItem('Antecedentes_FechaDelito', antecedentes.Antecedentes[0].Fecha)
          localStorage.setItem('Antecedentes_Razon', antecedentes.Razon)
          localStorage.setItem('Antecedentes_Fecha', antecedentes.Fecha)
        });
    });
  }

  async submit(ev) {
    console.log('compra completada');
    this.setState({ complete: true });
    console.log(this.state.complete);
    return "tok_visa"
  }

  render() {
    const { classes, ...rest } = this.props;
    if (this.state.complete) {
      return (
        <div style={{
          width: "auto",
          height: "960px",
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
                    <Button type="submit" color="info" >
                      <PDFDownloadLink style={{
                        color: "black"
                      }} document={<InpePDF />} fileName="Certificado_Antecedentes_Penales.pdf">
                        <h4 >Descargar certificado</h4>
                      </PDFDownloadLink>
                    </Button>
                  </center>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Paper>
              </Card>
            </GridItem>
          </GridContainer>
        </div >
      )
    } else {
      return (
        //Button para descargar el pdf
        <div style={{
          width: "auto",
          height: "960px",
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
                      label="Pagar Certificado: s/.30.00"
                      description="Inpe:Antecedentes Penales"
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

export default Inpe;

