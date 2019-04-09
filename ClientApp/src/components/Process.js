import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class Process extends Component {

  

  static displayName = Process.name;

  

  constructor (props) {
    super(props);


    console.log("props " + this.props);
    this.state = {  id: this.props.id, name: "", loading: true };


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
        this.setState({ id: data.id, name: data.name, description: data.description, 
          createdate: data.createdate, modifieddate:data.modifieddate, active: data.active,
          createdby: data.createdby, loading:false});
      });

      this.getProcessList = this.getProcessList.bind(this);
      this.getList = this.getList.bind(this);
  }
  
  getProcessList () {
    
    

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
        this.setState({ id: data.id, name: data.name, description: data.description, 
          createdate: data.createdate, modifieddate:data.modifieddate, active: data.active,
          createdby: data.createdby, loading:false});
      });



  }




  render () {
    
    return (
      
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>

        <Typography variant="h4" color="inherit">
          Process View
        </Typography>    
        <br/>
        <Card>
          <CardContent>
          {this.state.id}<br/>
          {this.state.name}<br/>
          {this.state.description}<br/>
          {this.state.createdate}<br/>
          {this.state.modifieddate}<br/>
          {this.state.active}<br/>
          {this.state.createdby}
          </CardContent>
        </Card>
        <br/><br/>
      </div>
    );
  }



  getList(){
    
    var returnData = [];
    if(this.state.processData!=""){
      //alert(JSON.parse(this.state.processList));
      //returnData = [{"id":1,"name":"test name","description":"test desc","createdate":"2019-03-30T00:00:00","modifieddate":null,"active":1,"createdby":"jedge"}];
      returnData = JSON.parse(this.state.processData);
    }
    return returnData;
  }

  
  
  
}
export default Process;