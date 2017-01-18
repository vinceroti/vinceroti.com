import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Glyphicon } from 'react-bootstrap';
import './styles/App.css';
import FontAwesome from 'react-fontawesome';

const styles = {

  name: {
    fontSize: '50px',
    fontWeight: 'bold'
  },

  header: {
    textAlign: 'center',
    color: 'white',
  },

  hr: {
    padding: 0,
    border: 'none',
    borderTop: 'solid 5px',
    textAlign: 'center',
    maxWidth: '250px',
    margin: '25px auto 30px',
  },

  star: {
    display: 'inline-block',
    position: 'relative',
    fontSize: '50px',
  },

  vince: {
    webkitBoxShadow: '0px 0px 32px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 32px 0px rgba(0,0,0,0.75)',
    boxShadow: '0px 0px 32px 0px rgba(0,0,0,0.75)',
    marginTop: '20px',
    borderRadius: '250px',
    width: '250px',
    height: '250px',
  }

}

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
      <div style={styles.header}>
        <img style={styles.vince} src="vince.jpg" alt="Vince Roti"/>
        <h1 style={styles.name}> Vince Roti </h1>
        <hr style={styles.hr}/>
        <Glyphicon glyph="star" style={styles.star} />
        <h4> Web Developer </h4>
      </div>
    );
  }
}

export { Header, NavBar }
