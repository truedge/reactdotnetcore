import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import Typography from '@material-ui/core/Typography';
import RefreshIcon  from '@material-ui/icons/Refresh';

import MaterialTable from 'material-table';
import Switch from '@material-ui/core/Switch';
import ToggleProcessActive from './ToggleProcessActive';


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
        >Refresh  <RefreshIcon/>
        </Button>

        <br/><br/>
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          
          
          columns={[
            { 
              title: 'Active', 
              field: 'availableActions',
              
              render: rowData => {
                var actionButtons = "";
                
                // SET ACTION BUTTONS TO USE IN COLUMN DATA
                if(rowData.active>0){
                  actionButtons =  <ToggleProcessActive pid={rowData.id} checked={true}></ToggleProcessActive>
                }else{
                  actionButtons = <ToggleProcessActive pid={rowData.id} checked={false}></ToggleProcessActive>
                }
                /*
                if(rowData.availableActions.indexOf("undeploy")>0){
                  actionButtons = <StopButton color="primary" textRendering="Undeploy" />
                }*/

                return(
                   <div>
                        {actionButtons}
                  </div>
                
                 
                )
              } 
            },
            { title: 'id', field: 'id', hidden: true },
            { title: 'name', field: 'name', children:'name' },
            { title: 'description', field: 'description', type: 'string'  },
            { title: 'modifieddate', field: 'modifieddate', type: 'datetime', readonly: true  },
            { title: 'createdate', field: 'createdate', type: 'datetime', readonly: true },
            { title: 'createdby', field: 'createdby', type:'string', readonly: true },
            { title: 'active', field: 'active', readonly: true }
            
          ]}
          //data={[{"id":1,"name":"test name","description":"test desc","createdate":"2019-03-30T00:00:00","modifieddate":null,"active":1,"createdby":"jedge"}]}
          data = {this.getList()}
          title="Search"
          
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
