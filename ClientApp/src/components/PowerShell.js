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
    fetch('api/powershell')
      .then(response => response.json())
      .then(data => {
        this.setState({ psCommand: this.state.psCommand, psReturn: JSON.stringify(data), loading:false});
      });

      this.runPowerShell = this.runPowerShell.bind(this);
  }
  

  runPowerShell () {
    
    
    /* GET
    fetch('api/powershell')
      .then(response => response.json())
      .then(data => {
        this.setState({ psCommand: this.state.psCommand, psReturn: JSON.stringify(data), loading:false});
      });
      */ 
      var cmd = document.getElementById("pscmd").value;

      fetch('api/powershell',
      {
        method:'post',
        body:"{\"cmd\":\"" + cmd + "\"}",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ psCommand: this.state.psCommand, psReturn: JSON.stringify(data), loading:false});
      });



  }


  

  render () {
    return (
      <div>
        <h1>PowerShell</h1>

        <p>Enter the text you would like to run.</p>
        <input id="pscmd"  type="text" defaultValue="date" onChange={ this.handleChange.bind(this) } ></input>
        <br/><br/>
        <p>Run Command: {this.state.psCommand}</p>
        <button className="btn btn-primary" onClick={this.runPowerShell}>Run script</button> 
        <br/>
        
        <div  style={{height: 100, width:300, borderColor: 'gray', borderWidth: 1}}>
        {this.state.psReturn} 
        </div> 
      </div>
    );
  }

  handleChange(e) {
    this.setState({ psCommand: e.target.value });
  }
}
