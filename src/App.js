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
    return (
      <div className="Home">
        <img id="vince" src="vince.jpg" alt="Vince Roti"/>
        <h1 id="name"> Vince Roti </h1>
        <hr class="star-light"/>
        <h4> Web Developer </h4>
      </div>
    );
  }
}

export { Header, NavBar }
