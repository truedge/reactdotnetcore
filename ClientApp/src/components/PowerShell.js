import React, { Component } from 'react';

export class PowerShell extends Component {
  static displayName = PowerShell.name;
/*
  constructor (props) {
    super(props);
    this.state = {  currentName: "Jamie" };
    this.setGreeting = this.setGreeting.bind(this);
  }

  */
  constructor (props) {
    super(props);
    this.state = { greeting: "", currentName: "", psCommand: "date", loading: true };


    //fetch('api/Greeting/action')
    fetch('api/Greeting')
      .then(response => response.json())
      .then(data => {
        this.setState({ currentName: data.Name, greeting:data.Greeting, psCommand: "date", loading:false});
      });

      this.runPowerShell = this.runPowerShell.bind(this);
  }
  

  runPowerShell () {
    console.log("here");
    fetch('api/Greeting')
      .then(response => response.json())
      .then(data => {
        this.setState({ currentName: data.Name, greeting:data.Greeting, psCommand: "date", loading:false});
      });
  }
  

  render () {
    return (
      <div>
        <h1>PowerShell</h1>

        <p>Enter the text you would like to run.</p>
        <input type="text" value={this.state.psCommand}></input>

        <p>Greeting: {this.state.greeting} <strong>{this.state.currentName}</strong></p>
        
        <button className="btn btn-primary" onClick={this.runPowerShell}>Add Last Name</button>
      </div>
    );
  }
}
