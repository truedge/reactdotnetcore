import React, { Component } from 'react';



import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';



export class StepTypeSelectList extends Component {
  static displayName = StepTypeSelectList.name;

  render () {
    return (
      <select id="{this.props.id}">
        <option value="3">C#</option>
        <option value="1">Email</option>
        <option selected value="2">PowerShell</option>
        <option value="4">SQL</option>
      </select>
    );
  }
}
