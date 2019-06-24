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

class ReniecPDF extends Component {

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
                        Dni: {localStorage.getItem('Acta_Dni')}
                        </Text>
                        <Text>
                        NroActa: {localStorage.getItem('Acta_NroActa')}
                        </Text>
                        <Text>
                        FechaNacimiento: {localStorage.getItem('Acta_FechaNacimiento')}
                        </Text>
                        <Text>
                        HoraNacimiento: {localStorage.getItem('Acta_HoraNacimiento')}
                        </Text>
                        <Text>
                        Departamento: {localStorage.getItem('Acta_Departamento')}
                        </Text>
                        <Text>
                        Provincia: {localStorage.getItem('Acta_Provincia')}
                        </Text>
                        <Text>
                        Distrito: {localStorage.getItem('Acta_Distrito')}
                        </Text>
                        <Text>
                        CentroPoblado: {localStorage.getItem('Acta_CentroPoblado')}
                        </Text>
                        <Text>
                        Sexo: {localStorage.getItem('Acta_Sexo')}
                        </Text>
                        <Text>
                        TitularPreNombres: {localStorage.getItem('Acta_TitularPreNombres')}
                        </Text>
                        <Text>
                        TitularPrimerApellido: {localStorage.getItem('Acta_TitularPrimerApellido')}
                        </Text>
                        <Text>
                        TitularSegundoApellido: {localStorage.getItem('Acta_TitularSegundoApellido')}
                        </Text>
                        <Text>
                        PadrePreNombres: {localStorage.getItem('Acta_PadrePreNombres')}
                        </Text>
                        <Text>
                        PadrePrimerApellido: {localStorage.getItem('Acta_PadrePrimerApellido')}
                        </Text>
                        <Text>
                        PadreSegundoApellido: {localStorage.getItem('Acta_PadreSegundoApellido')}
                        </Text>
                        <Text>
                        PadreTipoDoc: {localStorage.getItem('Acta_PadreTipoDoc')}
                        </Text>
                        <Text>
                        PadreNroDoc: {localStorage.getItem('Acta_PadreNroDoc')}
                        </Text>
                        <Text>
                        PadreNacionalidad: {localStorage.getItem('Acta_PadreNacionalidad')}
                        </Text>
                        <Text>
                        MadrePreNombres: {localStorage.getItem('Acta_MadrePreNombres')}
                        </Text>
                        <Text>
                        MadrePrimerApellido: {localStorage.getItem('Acta_MadrePrimerApellido')}
                        </Text>
                        <Text>
                        MadreSegundoApellido: {localStorage.getItem('Acta_MadreSegundoApellido')}
                        </Text>
                        <Text>
                        MadreTipoDoc: {localStorage.getItem('Acta_MadreTipoDoc')}
                        </Text>
                        <Text>
                        MadreNroDoc: {localStorage.getItem('Acta_MadreNroDoc')}
                        </Text>
                        <Text>
                        MadreNacionalidad: {localStorage.getItem('Acta_MadreNacionalidad')}
                        </Text>
                        <Text>
                        DireccionDepartamento: {localStorage.getItem('Acta_DireccionDepartamento')}
                        </Text>
                        <Text>
                        DireccionProvincia: {localStorage.getItem('Acta_DireccionProvincia')}
                        </Text>
                        <Text>
                        DireccionCentroPoblado: {localStorage.getItem('Acta_DireccionCentroPoblado')}
                        </Text>
                        <Text>
                        FechaRegistro: {localStorage.getItem('Acta_FechaRegistro')}
                        </Text>
                        
                    </View>
                    <View style={styles.section}>
                        <Text>{localStorage.getItem('Acta_id')}</Text>
                    </View>
                </Page>
            </Document>
        )

    }
}

export default ReniecPDF;
