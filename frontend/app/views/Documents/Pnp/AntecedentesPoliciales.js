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

class AntecedentesPolicialesPDF extends Component {

    constructor() {
        super()
        this.state = {
            antecedentes: [],
            descripcion: []
        }
    }


    render() {
        return (
            // Creando el Component Document
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>
                            Codigo: {localStorage.getItem('AntecedentesP_CodAnPol')}
                        </Text>
                        <Text>
                            Dni: {localStorage.getItem('AntecedentesP_Dni')}
                        </Text>
                        <Text>
                            Fecha de Registro: {localStorage.getItem('AntecedentesP_fecharegistro')}
                        </Text>
                        <Text>
                            Tipo de Antecedente: {localStorage.getItem('AntecedentesP_TipoAnPoL')}
                        </Text>
                        <Text>
                            Razon: {localStorage.getItem('AntecedentesP_Estado')}
                        </Text>
                        <Text>
                            Descripcion de Antecedente: {localStorage.getItem('AntecedentesP_DescripcionAntPol')}
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{localStorage.getItem('AntecedentesP_id')}</Text>
                    </View>
                </Page>
            </Document>
        )

    }
}

export default AntecedentesPolicialesPDF;
