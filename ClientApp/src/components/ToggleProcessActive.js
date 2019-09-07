import React from 'react';
import Switch from '@material-ui/core/Switch';

class ToggleProcessActive extends React.Component {
  state = {
    pid:this.props.pid,
    checked: this.props.checked
  };



  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    if(event.target.checked===false){
      this.undeployProcess(this.props.pid);
    }
    else{
      this.deployProcess(this.props.pid);
    }
    
  };

  undeployProcess (pId) {

    var sUrl = "api/process/" + String(pId);

    fetch(sUrl,
    {
      method:'delete',
      headers: {
        'Accept': 'application/json'
      }
    })
    this.setState( { pid: pId, checked: false} );

  }   

  deployProcess (pId) {

    var sUrl = "api/process/" + String(pId);

    fetch(sUrl,
    {
      method:'put',
      body:"{\"userId\":\"  jedge \"}",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    this.setState( { pid: pId, checked: true} );

  }   

  render() {
    return (
      <div>
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange('checked',this.state.pid)}
          value="checked"
          color="primary"
        />
      </div>
      
    );
  }
}

export default ToggleProcessActive;
