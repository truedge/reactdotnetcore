import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MenuAppBar from './MenuAppBar';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <MenuAppBar />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
