import React from 'react';

const About = () => (
  <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <form action="http://localhost:3000/api/inpe/antecedentes" >
      <h2>Reniec Page</h2>
      This example shows how to use React Router!
    <br></br>
      DNI <input name="dni" placeholder="DNI"></input>
      <br></br>
      <button type="submit">Descargar</button>
    </form>
  </div>

);


export default About;