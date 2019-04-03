import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';



export class MySQL extends Component {


  static displayName = MySQL.name;

  constructor (props) {
    super(props);
    this.state = { greeting: "", currentName: "", sqlCommand: "select * from step_types", loading: true };


    //fetch('api/Greeting/action')
    fetch('api/mysql',
      {
        method:'post',
        body:"{\"sql\":\"" + this.state.sqlCommand + "\"}",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ sqlCommand: this.state.sqlCommand, sqlOutput: JSON.stringify(data), loading:false});
      });

      this.runSQL = this.runSQL.bind(this);
      this.keyPress = this.keyPress.bind(this);
  }
  


  runSQL () {
    
    
    /* GET
    fetch('api/powershell')
      .then(response => response.json())
      .then(data => {
        this.setState({ psCommand: this.state.psCommand, psReturn: JSON.stringify(data), loading:false});
      });
      */ 
      var sql = document.getElementById("sqlcmd").value;

      fetch('api/mysql',
      {
        method:'post',
        body:"{\"sql\":\"" + sql + "\"}",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ sqlCommand: this.state.sqlCommand.trim(), sqlOutput: JSON.stringify(data), loading:false});
      });



  }

  render () {
    return (
      <div>
        <h1>mySQL</h1>
        <p>Enter the query you would like to run.</p>
        <TextField
          id="sqlcmd"
          placeholder="MultiLine with rows: 2 and rowsMax: 4"
          autoFocus={true}
          multiline={true}
          rows={3}
          rowsMax={200}
          fullWidth={true}
          required={true}
          value={this.state.sqlCommand}
          onChange={ this.handleChange.bind(this) }
          onKeyDown={ this.keyPress.bind(this) }
        />
        
        <br/><br/>
        <Button 
          variant="contained" 
          color="primary"
          fullWidth={true}
          children="Run SQL"
          onClick= {this.runSQL}
        ></Button>
        <br/><br/>
        <p>SQL: {this.state.sqlCommand}</p>
        <div  style={{height: 100, width:300, borderColor: 'gray', borderWidth: 1}}>
        {this.state.sqlOutput} 
        </div> 
      </div>
    );
  }

  handleChange(e) {
    this.setState({ sqlCommand: e.target.value });
  }

  keyPress(e){
    //alert(e.keyCode);
    if(e.keyCode === 13){
       console.log('value', e.target.value);
       // put the login here
       this.runSQL();
    }
  }

  
  
  
}
