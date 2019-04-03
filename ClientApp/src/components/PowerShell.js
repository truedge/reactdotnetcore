import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';


export class PowerShell extends Component {
  static displayName = PowerShell.name;

  constructor (props) {
    super(props);
    
    this.state = { greeting: "", currentName: "", psCommand: "date|convertto-json", loading: true };


    //fetch('api/Greeting/action')
    fetch('api/powershell')
      .then(response => response.json())
      .then(data => {
        this.setState({ psCommand: this.state.psCommand, psReturn: JSON.stringify(data), loading:false});
      });

      this.runPowerShell = this.runPowerShell.bind(this);
      this.keyPress = this.keyPress.bind(this);
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
        this.setState({ psCommand: this.state.psCommand.trim(), psReturn: JSON.stringify(data), loading:false});
      });



  }


  

  render () {
    
    return (
      
      <div>
        <h1>PowerShell</h1>

        <p>Enter the text you would like to run.</p>
        <TextField
          id="pscmd"
          placeholder="MultiLine with rows: 2 and rowsMax: 4"
          autoFocus={true}
          multiline={true}
          rows={3}
          rowsMax={200}
          fullWidth={true}
          required={true}
          value={this.state.psCommand}
          onChange={ this.handleChange.bind(this) }
          onKeyDown={ this.keyPress.bind(this) }
        />
        <br/><br/>
        
        <Button 
          variant="contained" 
          color="primary"
          fullWidth={true}
          children="Run Command"
          onClick= {this.runPowerShell}
        ></Button>
        <br/><br/>
        <p>Command: {this.state.psCommand}</p>
        <div  style={{height: 100, width:300, borderColor: 'gray', borderWidth: 1}}>
        {this.state.psReturn} 
        </div> 
      </div>
    );
  }


  handleChange(e) {
    this.setState({ psCommand: e.target.value });
  }

  keyPress(e){
    //alert(e.keyCode);
    if(e.keyCode === 13){
       console.log('value', e.target.value);
       // put the login here
       this.runPowerShell();
    }
  }
  
}
