import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Greeting } from './components/Greeting';
import { PowerShell } from './components/PowerShell';
import { MySQL } from './components/MySQL';
import { ProcessList } from './components/ProcessList';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/greeting' component={Greeting} />
        <Route path='/powershell' component={PowerShell} />
        <Route path='/mysql' component={MySQL} />
        <Route path='/processlist' component={ProcessList} />
      </Layout>
    );
  }
}
