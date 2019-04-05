import React from 'react';
import Switch from '@material-ui/core/Switch';

class ToggleProcessActive extends React.Component {
  state = {
    pid:null,
    checked: true
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

  }   

  deployProcess (pId) {

    var sUrl = "api/process/" + String(pId);

    fetch(sUrl,
    {
      method:'put',
      headers: {
        'Accept': 'application/json'
      }
    })

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
