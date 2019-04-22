import React, { Component } from 'react';

import Heading from './Heading';
import Row from './Row';

import { METHODS } from 'http';
import { get } from 'https';

class Headings extends Component {
  render() {
    return <thead className="table-success">
      <tr>
        {
          this.props.headings.map((heading, i) => {
            return <Heading heading={heading} key={i}/>
          })}
        </tr>
      </thead>
  }
}

class Rows extends Component {
  render() {
    return <tbody>
      {
        this.props.data.map((row, i)=> {
          return (
            <Row change={row} key={i}/>
          )
        })
      }
    </tbody>
  }
}

class ProPlayers extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    setImmediate(async () => {
      
      const res = await fetch('https://api.opendota.com/api/proPlayers')
      const data = await res.json();//se guarda toda la data del request al endpoint 
      
      console.log(data);
      console.log(data.draft_timings);
      console.log('fin');
      const formatData = this.formatData(data);
      this.setState({data: formatData});
    });
    


    
  }

  formatData(data) {
    return data.map((data,i) => {
      return {
        "name": data.name,
        "account_id": data.account_id,
        "steamid": 'https://steamcommunity.com/profiles/' + data.steamid,
        "avatar": data.avatarmedium
      }
    });
  }

  render() {
    return (
      <div key="pplayers" className="container p-4">
        <h1>{this.props.title}</h1>
        <table className="table table-bordered">
          <Headings headings={this.props.headings}/>
          <Rows data={this.state.data}/>
        </table>
      </div>
    );
  }
}

export default ProPlayers;
