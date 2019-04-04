import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';

import Typography from '@material-ui/core/Typography';
import MTableToolbar from 'bootstrap';
import { AddIcon,IconButton } from 'bootstrap';
import { Toolbar } from '@material-ui/core';


export class ProcessList extends Component {


  static displayName = ProcessList.name;

  constructor (props) {
    super(props);
    this.state = {  processList: [], loading: true };


    fetch('api/processlist',
      {
        method:'post',
        body:"{\"userId\":\"  jedge \"}",
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

      fetch('api/processlist',
      {
        method:'post',
        body:"{\"userId\":\"  jedge \"}",
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

  DeleteProcess (pId) {

      var sUrl = "api/process/" + String(pId);

      fetch(sUrl,
      {
        method:'delete',
        headers: {
          'Accept': 'application/json'
        }
      })
     /* .then(response => response.json())
      .then(data => {
        this.setState({ loading:false});
      });
        */
  }

  render () {
    
    return (
      
      <div>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>

        <Typography variant="h4" color="inherit">
          Process Administration
        </Typography>    
        <br/><br/>
        <Button 
          variant="contained" 
          color="primary"
          fullWidth={true}
          children="Get Process Inventory"
          onClick= {this.getProcessList}
        ></Button>
        <br/><br/>
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          
          
          columns={[
            { title: 'id', field: 'id' },
            { title: 'name', field: 'name' },
            { title: 'description', field: 'description' },
            { title: 'modifieddate', field: 'modifieddate' },
            { title: 'createdate', field: 'createdate' },
            { title: 'createdby', field: 'createdby' },
            { title: 'active', field: 'active' }
            
          ]}
          //data={[{"id":1,"name":"test name","description":"test desc","createdate":"2019-03-30T00:00:00","modifieddate":null,"active":1,"createdby":"jedge"}]}
          data = {this.getList()}
          title="Search"
          editable={{
            onClick: () =>
            new Promise((resolve) => {
              setTimeout(() => {
                {
                  alert("click");
                  /* const data = this.state.data;
              data.push(newData);
              this.setState({ data }, () => resolve()); */
                }
                resolve()
              }, 1)
            }),
            onRowAdd: () =>
              new Promise((resolve) => {
                setTimeout(() => {
                  {
                    /* const data = this.state.data;
                data.push(newData);
                this.setState({ data }, () => resolve()); */
                  }
                  resolve()
                }, 1000)
              }),
            onRowUpdate: () =>
              new Promise((resolve) => {
                setTimeout(() => {
                  {
                    /* const data = this.state.data;
            const index = data.indexOf(oldData);
            data[index] = newData;                
            this.setState({ data }, () => resolve()); */
                  }
                  resolve()
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve) => {
                setTimeout(() => {
                  {
                    
                    {this.DeleteProcess(oldData.id)}
                    /* let data = this.state.data;
            const index = data.indexOf(oldData);
            data.splice(index, 1);
            this.setState({ data }, () => resolve()); */
           
                   setTimeout(() => {
                   { 
                     {this.getProcessList()}
                    }
                    resolve()
                   }, 30)



                  }
                  resolve()
                }, 500)
              }),
          }}
        />
      </div>
      </div>
    );
  }

  getList(){
    
    var returnData = [];
    if(this.state.processList!=""){
      //alert(JSON.parse(this.state.processList));
      //returnData = [{"id":1,"name":"test name","description":"test desc","createdate":"2019-03-30T00:00:00","modifieddate":null,"active":1,"createdby":"jedge"}];
      returnData = JSON.parse(this.state.processList);
    }
    return returnData;
  }

  
  
  
}
