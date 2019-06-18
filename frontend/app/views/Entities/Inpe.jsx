import React, { Component } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import InpePDF from '../Documents/Inpe'
import Button from "../components/CustomButtons/Button.jsx";
import StripeCheckout from 'react-stripe-checkout';

class Inpe extends Component {


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

    if (this.state.complete) {
      return (
        <div>
          <center>
            <Button type="submit" color="info" size="lg">
              <PDFDownloadLink document={<InpePDF />} fileName="Certificado_Antecedentes_Penales.pdf">
                <label >Atecedentes Penales</label>
              </PDFDownloadLink>
            </Button>
          </center>
        </div>
      )
    } else {
      return (
        //Button para descargar el pdf
        <div>
          <center>
            <StripeCheckout
              label="Pagar Documento"
              description="Awesome Product"
              locale="auto"
              name="YourDomain.tld"
              stripeKey="pk_test_FCPeBUUz3HatoOcISYwticUI009Lat98Hl"
              token={this.submit}
            />

          </center>
        </div>
      )
    }


  }
}

export default Inpe;

