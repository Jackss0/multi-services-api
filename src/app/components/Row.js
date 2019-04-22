import React, { Component } from 'react';

class Row extends Component {
  render() {
    return(
      <tr>
        <td>{this.props.change.name}</td>
        <td>{this.props.change.account_id}</td>
        <td><a href={this.props.change.steamid}>{this.props.change.steamid}</a></td>
        <td><img src={this.props.change.avatar}></img></td>
      </tr>
    )
  }
}

export default Row;
