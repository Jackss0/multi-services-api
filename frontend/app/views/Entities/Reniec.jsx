import React, { Component } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';


// Creando Stilos
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Creando el Component Document
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

class Reniec extends Component {


  constructor(props) {
    super(props)
    this.state = {
      antecedentes: [],
      descripcion: []
    }
  }


  componentWillMount() {
    const dni = localStorage.getItem('myDni');
    fetch('http://localhost:3000/api/inpe/antecedentes/' + dni,
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

  render() {

    return (
      //Button para descargar el pdf
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <center>
          <PDFDownloadLink document={<MyDocument />} fileName="Certificado_Antecedentes_Penales.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Certificado Antecedentes Penales')}
          </PDFDownloadLink>
        </center>
      </div>
    )
  }
}

export default Reniec;

