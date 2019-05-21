import React, { Component } from 'react';


class Reniec extends Component {
  render() {

    return (
      <div>
        <div>
          <h2>Reniec Page</h2>
          This example shows how to use React Router!
          <br></br>
          DNI <input name="dni" placeholder="DNI"></input>
          <br></br>
          <button type="submit">Descargar</button>
        </div>
      </div>
    )
  }

  constructor() {
    super();
    this.state = {
      reniec: []
    };
  }
  componentDidMount() {
    setImmediate(async () => {
      var dni = '71279117';
      const res = await fetch(`http://localhost:3000/api/inpe/antecedentes/` + dni, { mode: "no-cors" });
      const data = await res.json();

      console.log(data);
      console.log(data.draft_timings);
      console.log('fin');
      this.setState({ reniec: data });
    });
  }




}

/*
const About = ({ reniec }) => (
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
*/

export default Reniec;

