import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export class CreateProcessStep extends Component {
  static displayName = CreateProcessStep.name;

  constructor (props) {
    super(props);
    
    this.state = { id: "", currentName: "", psCommand: "date|convertto-json", loading: false };

      this.insertProcessStep = this.insertProcessStep.bind(this);
    
  }
  


  insertProcessStep () {
    
      var name = document.getElementById("pName").value;
      var description = document.getElementById("pDescription").value;
      var processid = 24;
      var steptypeid = 2;

      fetch('api/processstep',
      {
        method:'post',
        body:"{\"name\":\"" + name + "\",\"description\": \"" + description
        + "\",\"processid\": \"" + processid
        + "\",\"steptypeid\": \"" + steptypeid
        +  "\",\"active\": 1 }",

        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ psCommand: this.state.psCommand.trim(), psReturn: JSON.stringify(data), loading:false});
      });

        console.log("testing testing");
        


  }
  

  render () {
    
    return (
      
      <div>
        <br/>
        <Typography variant="h4" color="inherit">
          Create Process Step
        </Typography>
        <form id="cProcessStep" 
            onSubmit={
              (e) => {
                /**
                 * Prevent submit from reloading the page
                 */
                this.insertProcessStep();
                e.preventDefault();
                e.stopPropagation();
                this.props.history.push('/processlist');
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
            children="Create Process Step"
            form="cProcessStep"
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
