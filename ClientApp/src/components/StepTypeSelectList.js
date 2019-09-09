import React, { Component } from 'react';

//import Select from '@material-ui/core/Select';



export class StepTypeSelectList extends Component {

  state = {
    id:this.props.id
  };

  static displayName = StepTypeSelectList.name;

  render () {
    return (
      <select defaultValue="2" id={this.state.id}>
        <option value="3">C#</option>
        <option value="1">Email</option>
        <option value="2">PowerShell</option>
        <option value="4">SQL</option>
      </select>
    );
  }
}
