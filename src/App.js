import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './styles/App.css';
import './styles/freelancer.less';


const NavBar = React.createClass({
  handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
  },

  render() {
    return (
     <Navbar inverse>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="#">Vince Roti</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav pullRight>
             <NavItem eventKey={1} href="#">Portfolio</NavItem>
             <NavItem eventKey={2} href="#">About</NavItem>
             <NavItem eventKey={3} target="_blank" href="VinceRoti.pdf">Resume</NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
});


class Header extends Component {
  render() {
    const headerStyle = {
        textAlign: 'center',
        color: 'white',
      };

    const hrStyle = {
        padding: 0,
        border: 'none',
        borderTop: 'solid 5px',
        textAlign: 'center',
        maxWidth: '250px',
        margin: '25px auto 30px',
      };

    return (
      <div style={headerStyle}>
        <img id="vince" src="vince.jpg" alt="Vince Roti"/>
        <h1 id="name"> Vince Roti </h1>
        <hr style={hrStyle}/>
        <h4> Web Developer </h4>
      </div>
    );
  }
}

export { Header, NavBar }
