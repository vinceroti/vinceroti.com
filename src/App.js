import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <h3> a nav bar goes here </h3>
//         <Navbar inverse collapseOnSelect>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#">React-Bootstrap</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//           </Navbar.Header>
//           <Navbar.Collapse>
//             <Nav>
//               <NavItem eventKey={1} href="#">Link</NavItem>
//               <NavItem eventKey={2} href="#">Link</NavItem>
//               <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//                 <MenuItem eventKey={3.1}>Action</MenuItem>
//                 <MenuItem eventKey={3.2}>Another action</MenuItem>
//                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
//                 <MenuItem divider />
//                 <MenuItem eventKey={3.3}>Separated link</MenuItem>
//               </NavDropdown>
//             </Nav>
//             <Nav pullRight>
//               <NavItem eventKey={1} href="#">Link Right</NavItem>
//               <NavItem eventKey={2} href="#">Link Right</NavItem>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
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
