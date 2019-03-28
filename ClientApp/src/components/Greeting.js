import React, { Component } from 'react';

export class Greeting extends Component {
  static displayName = Greeting.name;
/*
  constructor (props) {
    super(props);
    this.state = {  currentName: "Jamie" };
    this.setGreeting = this.setGreeting.bind(this);
  }

  */
  constructor (props) {
    super(props);
    this.state = { greeting: "", currentName: "", loading: true };


    //fetch('api/Greeting/action')
    fetch('api/Greeting')
      .then(response => response.json())
      .then(data => {
        this.setState({ currentName: data.Name, greeting:data.Greeting, loading:false});
      });

      this.setGreeting = this.setGreeting.bind(this);
  }
  

  setGreeting () {
    console.log("here");
    fetch('api/Greeting')
      .then(response => response.json())
      .then(data => {
        this.setState({ currentName: data.Name, greeting:data.Greeting, loading:false});
      });
  }
  

  render () {
    return (
      <div>
        <h1>Greeting</h1>

        <p>This is a simple example of a React component. New dev version2</p>

        <p>Greeting: {this.state.greeting} <strong>{this.state.currentName}</strong></p>

        <button className="btn btn-primary" onClick={this.setGreeting}>Add Last Name</button>
      </div>
    );
  }
}
