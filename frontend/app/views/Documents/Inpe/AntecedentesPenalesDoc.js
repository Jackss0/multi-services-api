import React, { Component } from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { isNullOrUndefined } from 'util';

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

class InpePDF extends Component {

    constructor() {
        super()
        this.state = {
            antecedentes: [],
            descripcion: []
        }
    }
/*
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
    }*/


    render() {
        return (
            // Creando el Component Document
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>
                            Nombres: {localStorage.getItem('Antecedentes_Nombres')}
                        </Text>
                        <Text>
                            Apellidos: {localStorage.getItem('Antecedentes_Apellidos')}
                        </Text>
                        <Text>
                            Dni: {localStorage.getItem('Antecedentes_Dni')}
                        </Text>
                        <Text>
                            Descripcion: {localStorage.getItem('Antecedentes_DescripcionDelito')}
                        </Text>
                        <Text>
                            Fecha1: {localStorage.getItem('Antecedentes_FechaDelito')}
                        </Text>
                        <Text>
                            Razon: {localStorage.getItem('Antecedentes_Razon')}
                        </Text>
                        <Text>
                            Fecha2: {localStorage.getItem('Antecedentes_Fecha')}
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{localStorage.getItem('Antecedentes_id')}</Text>
                    </View>
                </Page>
            </Document>
        )

    }
}

export default InpePDF;
