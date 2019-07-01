import React, { Component } from 'react';
import ReactPDF, {
    Text,
    Document,
    Font,
    Page,
    StyleSheet,
    Image,
    View,
} from '@react-pdf/renderer';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

// Creando Stilos
const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        '@media max-width: 400': {
            flexDirection: 'column',
        },
    },
    image: {
        marginBottom: 10,
    },
    leftColumn: {
        flexDirection: 'column',
        width: 170,
        paddingTop: 30,
        paddingRight: 15,
        '@media max-width: 400': {
            width: '100%',
            paddingRight: 0,
        },
        '@media orientation: landscape': {
            width: 200,
        },
    },
    footer: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 25,
        paddingTop: 10,
        borderWidth: 3,
        borderColor: 'gray',
        borderStyle: 'dashed',
        '@media orientation: landscape': {
            marginTop: 10,
        },
    },
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
                    <Header />
                    <View style={styles.container}>
                        <View style={styles.leftColumn}>
                            <Education />
                            <Skills />
                        </View>
                        <Experience />
                    </View>
                </Page>
            </Document>
        )

    }
}

export default AntecedentesPolicialesPDF;
