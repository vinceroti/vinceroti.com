import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const style = {
  zIndex: '99',
  top: '0px',
  position: 'fixed',
  width: '100%',
  overFlow: 'hidden',
  border: 'rgba(8, 8, 8, 0)'
}

class NavBar extends Component {

  render() {
    return (
     <Navbar inverse style={style}>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="#">Vince Roti</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav pullRight>
             <NavItem href="#about">About</NavItem>
             <NavItem href="#portfolio">Portfolio</NavItem>
             <NavItem target="_blank" href="VinceRoti.pdf">Resume</NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
};

export default NavBar
