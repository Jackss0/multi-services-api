import React from 'react';

import Title from './Title';
import List, { Item } from './List';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = () => (
  <View>
    <Title>Informacion Adicional:</Title>
    <Text style={styles.title}>Fecha: {localStorage.getItem('AntecedentesP_fecharegistro')}</Text>
  </View>
);

export default Skills;
