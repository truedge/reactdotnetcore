import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Table, TableRow, TableCell, TableBody, FormLabel } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';


export class CreateProcess extends Component {
  static displayName = CreateProcess.name;

  constructor (props) {
    super(props);
    
    this.state = { id: "", currentName: "", psCommand: "date|convertto-json", loading: false };

      this.insertProcess = this.insertProcess.bind(this);
    
  }
  


  insertProcess () {
    
    
    /* GET
    fetch('api/powershell')
      .then(response => response.json())
      .then(data => {
        this.setState({ psCommand: this.state.psCommand, psReturn: JSON.stringify(data), loading:false});
      });
      */ 
      var name = document.getElementById("pName").value;
      var description = document.getElementById("pDescription").value;

      fetch('api/process',
      {
        method:'post',
        body:"{\"name\":\"" + name + "\",\"description\": \"" + description +  "\",\"active\":"  + "1" + " }",
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
        <br/>
        <Typography variant="h4" color="inherit">
          Create Process
        </Typography>
        <form id="cProcess" 
            onSubmit={
              (e) => {
                /**
                 * Prevent submit from reloading the page
                 */
                this.insertProcess();
                e.preventDefault();
                e.stopPropagation();
              }
            }
        >
          <TextField required={true} label="Name" id="pName"/><br/>
          <TextField required={true} label="Description" id="pDescription" multiline={true} fullWidth={true} rows={3}/>
          <br/><br/>
          <Button 
            variant="contained" 
            color="primary"
            fullWidth={true}
            children="Create Process"
            form="cProcess"
            type="submit"
          ></Button>
        </form>
        
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
