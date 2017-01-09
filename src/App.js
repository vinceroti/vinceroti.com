import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <h3> Cool React NavBar </h3>
      )
  }
}

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1> Vince Roti </h1>
        <h4> Web Developer </h4>
      </div>
    );
  }
}

export { Home, Nav };
