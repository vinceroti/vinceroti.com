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


  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  }

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
             <NavItem eventKey={1} href="#portfolio">Portfolio</NavItem>
             <NavItem eventKey={2} href="#">About</NavItem>
             <NavItem eventKey={3} target="_blank" href="VinceRoti.pdf">Resume</NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
};

export { NavBar };
