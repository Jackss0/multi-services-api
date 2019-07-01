import React from 'react';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontSize: 10,
  },
  degree: {
    fontSize: 10,
  },
  candidate: {
    fontSize: 10,
  },
});

export default () => (
  <View style={styles.container}>
    <Title>Ciudadano</Title>
    <Text style={styles.school}>Dni: {localStorage.getItem('Antecedentes_Dni')}</Text>
  </View>
);
