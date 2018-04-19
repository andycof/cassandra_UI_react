// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginComponent from '../components/LoginComponent';


type Props = {};

export default class Login extends Component<Props> {
  props: Props;

  render() {
    return (
        <MuiThemeProvider>
            <LoginComponent />
      </MuiThemeProvider>
    );
  }
}
