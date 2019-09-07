import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import RefreshIcon  from '@material-ui/icons/Refresh';

import { Process } from './Process'


export class ViewProcess extends Component {

  

  static displayName = ViewProcess.name;
  
  componentDidMount () {
    const { handle } = this.props.match.params
    console.log("handle: " + handle);
    fetch(`api/process/${handle}`,
    {
      method:'post',
      //body:"{\"userId\":\"  jedge \"}",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((user) => {
        this.setState(() => ({ user }))
      })
  }
  

  constructor (props) {
    super(props);

    //let url = this.props.location.search;
    //let params = queryString.parse(url);
    console.log("props " + this.props);
    this.state = {  processList: [], loading: true };


    fetch('api/process/34',
      {
        method:'post',
        //body:"{\"userId\":\"  jedge \"}",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({  processList: JSON.stringify(data), loading:false});
      });

      this.getProcessList = this.getProcessList.bind(this);
      this.getList = this.getList.bind(this);
  }
  
  getProcessList () {
    
    
    /* GET
    fetch('api/powershell')
      .then(response => response.json())
      .then(data => {
        this.setState({ psCommand: this.state.psCommand, psReturn: JSON.stringify(data), loading:false});
      });
      */ 

      fetch('api/process/34',
      {
        method:'post',
        //body:"{\"userId\":\"  jedge \"}",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ processList: JSON.stringify(data), loading:false});
      });



  }




  render () {
    
    return (
      
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <br/>
        <Process id={this.state.id}/>
        <br/><br/>

        <Button 
          variant="contained" 
          color="primary"
          fullWidth={true}
          children="Get Process Inventory"
          onClick= {this.getProcessList}
        >Refresh  <RefreshIcon/>
        </Button>

        <br/><br/>
      </div>
    );
  }



  getList(){
    
    var returnData = [];
    if(this.state.processList.toString() !== ""){
      //alert(JSON.parse(this.state.processList));
      //returnData = [{"id":1,"name":"test name","description":"test desc","createdate":"2019-03-30T00:00:00","modifieddate":null,"active":1,"createdby":"jedge"}];
      returnData = JSON.parse(this.state.processList);
    }
    return returnData;
  }

  
  
  
}
