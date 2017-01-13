import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

const NavBar = React.createClass({
  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  },

  render() {
    return (
      <div>
        <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1}>About Me</NavItem>
          <NavItem eventKey={2}>Projects</NavItem>
          <NavItem eventKey={3}>Resume</NavItem>
        </Nav>
      </div>
    );
  }
});


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1 id="name"> Vince Roti </h1>
        <h4> Web Developer </h4>
      </div>
    );
  }
}

export { Home, NavBar };
