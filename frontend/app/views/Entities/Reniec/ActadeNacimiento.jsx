
import React, { Component } from 'react';
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

import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import ReniecPDF from '../../Documents/Reniec/ActaDeNacimientoDoc'
import Button from "../../components/CustomButtons/Button.jsx";
import StripeCheckout from 'react-stripe-checkout';


class Reniec extends Component {


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
    fetch('http://localhost:3000/api/reniec/actanacimiento/' + dni,
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
        localStorage.setItem('Acta_id', antecedentes._id)
        localStorage.setItem('Acta_Dni', antecedentes.Cui)
        localStorage.setItem('Acta_NroActa', antecedentes.NroActa)
        localStorage.setItem('Acta_FechaNacimiento', antecedentes.FechaNacimiento)
        localStorage.setItem('Acta_HoraNacimiento', antecedentes.HoraNacimiento)
        localStorage.setItem('Acta_Departamento', antecedentes.Departamento)
        localStorage.setItem('Acta_Provincia', antecedentes.Provincia)
        localStorage.setItem('Acta_Distrito', antecedentes.Distrito)
        localStorage.setItem('Acta_CentroPoblado', antecedentes.CentroPoblado)
        localStorage.setItem('Acta_Sexo', antecedentes.Sexo)
        localStorage.setItem('Acta_TitularPreNombres', antecedentes.TitularPreNombres)
        localStorage.setItem('Acta_TitularPrimerApellido', antecedentes.TitularPrimerApellido)
        localStorage.setItem('Acta_TitularSegundoApellido', antecedentes.TitularSegundoApellido)
        localStorage.setItem('Acta_PadrePreNombres', antecedentes.PadrePreNombres)
        localStorage.setItem('Acta_PadrePrimerApellido', antecedentes.PadrePrimerApellido)
        localStorage.setItem('Acta_PadreSegundoApellido', antecedentes.PadreSegundoApellido)
        localStorage.setItem('Acta_PadreTipoDoc', antecedentes.PadreTipoDoc)
        localStorage.setItem('Acta_PadreNroDoc', antecedentes.PadreNroDoc)
        localStorage.setItem('Acta_PadreNacionalidad', antecedentes.PadreNacionalidad)
        localStorage.setItem('Acta_MadrePreNombres', antecedentes.MadrePreNombres)
        localStorage.setItem('Acta_MadrePrimerApellido', antecedentes.MadrePrimerApellido)
        localStorage.setItem('Acta_MadreSegundoApellido', antecedentes.MadreSegundoApellido)
        localStorage.setItem('Acta_MadreTipoDoc', antecedentes.MadreTipoDoc)
        localStorage.setItem('Acta_MadreNroDoc', antecedentes.MadreNroDoc)
        localStorage.setItem('Acta_MadreNacionalidad', antecedentes.MadreNacionalidad)
        localStorage.setItem('Acta_DireccionDepartamento', antecedentes.DireccionDepartamento)
        localStorage.setItem('Acta_DireccionProvincia', antecedentes.DireccionProvincia)
        localStorage.setItem('Acta_DireccionCentroPoblado', antecedentes.DireccionCentroPoblado)
        localStorage.setItem('Acta_FechaRegistro', antecedentes.FechaRegistro)
        localStorage.setItem('Acta_OficinaRegistralDepartamento', antecedentes.OficinaRegistralDepartamento)
        localStorage.setItem('Acta_OficinaRegistralProvincia', antecedentes.OficinaRegistralProvincia)
        localStorage.setItem('Acta_OficinaRegistralDistrito', antecedentes.OficinaRegistralDistrito)
        localStorage.setItem('Acta_DeclarantePrimerApellido', antecedentes.DeclarantePrimerApellido)
        localStorage.setItem('Acta_DeclaranteSegundoApellido', antecedentes.DeclaranteSegundoApellido)
        localStorage.setItem('Acta_DeclarantePrenombres', antecedentes.DeclarantePrenombres)
        localStorage.setItem('Acta_DeclaranteTipoDoc', antecedentes.DeclaranteTipoDoc)
        localStorage.setItem('Acta_DeclaranteNroDoc', antecedentes.DeclaranteNroDoc)
        localStorage.setItem('Acta_RegistradorCivilPrimerApellido', antecedentes.RegistradorCivilPrimerApellido)
        localStorage.setItem('Acta_RegistradorCivilSegundoApellido', antecedentes.RegistradorCivilSegundoApellido)
        localStorage.setItem('Acta_RegistradorCivilPrenombres', antecedentes.RegistradorCivilPrenombres)
        localStorage.setItem('Acta_RegistradorCivilDni', antecedentes.RegistradorCivilDni)
        localStorage.setItem('Acta_Observaciones', antecedentes.Observaciones)
        localStorage.setItem('Acta_FirmaDeclarante', antecedentes.FirmaDeclarante)
        localStorage.setItem('Acta_HuellaDigitalDeclarante', antecedentes.HuellaDigitalDeclarante)
        localStorage.setItem('Acta_FirmaRegistradorCivil', antecedentes.FirmaRegistradorCivil)
        localStorage.setItem('Acta_HuellaDigitalRegistradorCivil', antecedentes.HuellaDigitalRegistradorCivil)
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
                    <Button type="submit" color="info" >
                      <PDFDownloadLink style={{
                        color: "black"
                      }} document={<ReniecPDF />} fileName="Certificado_Antecedentes_Penales.pdf">
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

export default Reniec;

