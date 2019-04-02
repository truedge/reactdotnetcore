import React, { Component } from 'react';

export class MySQL extends Component {
  static displayName = MySQL.name;
/*
  constructor (props) {
    super(props);
    this.state = {  currentName: "Jamie" };
    this.setGreeting = this.setGreeting.bind(this);
  }

  */
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
        this.setState({ sqlCommand: this.state.sqlCommand, sqlOutput: JSON.stringify(data), loading:false});
      });



  }


  

  render () {
    return (
      <div>
        <h1>mySQL</h1>
        <details>
          <summary>See More</summary>
          This text will be hidden if your browser supports it.
        </details>
        <p>Enter the text you would like to run.</p>
        <textarea id="sqlcmd" cols="65" rows="7" type="text" defaultValue="select * from step_types" onChange={ this.handleChange.bind(this) } ></textarea>
        <br/><br/>
        <p>Run SQL: {this.state.sqlCommand}</p>
        <button className="btn btn-primary" onClick={this.runSQL}>Run script</button> 
        <br/>
        
        <div  style={{height: 100, width:300, borderColor: 'gray', borderWidth: 1}}>
        {this.state.sqlOutput} 
        </div> 
      </div>
    );
  }

  handleChange(e) {
    this.setState({ sqlCommand: e.target.value });
  }
}
