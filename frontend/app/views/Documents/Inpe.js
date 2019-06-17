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

    componentWillMount() {
        setImmediate(() => {
            var dni = localStorage.getItem('myDni');
            fetch('http://localhost:3000/api/inpe/antecedentes/' + dni,
                {
                    method: "GET"
                })
                .then((response) => {
                    //console.log(response)
                    return response.json();
                })
                .then((antecedentes) => {
                    //const formatData = this.formatData(antecedentes);
                    //console.log(antecedentes)
                    //console.log(formatData)
                    this.setState({ antecedentes: antecedentes });
                    localStorage.setItem('Antecedentes_Nombres', antecedentes.Nombres)
                    localStorage.setItem('Antecedentes_Apellidos', antecedentes.Apellidos)
                });
        });
    }


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
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
        )

    }
}

export default InpePDF;
