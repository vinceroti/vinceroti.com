import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import smoothScroll from 'smooth-scroll';

const styles = {
  nav: {
    zIndex: '99',
    top: '0px',
    position: 'fixed',
    width: '100%',
    overFlow: 'hidden',
    border: 'rgba(8, 8, 8, 0)'
  },
  item: {

  }
}

class NavBar extends Component {
  isInViewport(element) {
    let rect = element.getBoundingClientRect();
    let html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

  render() {
    smoothScroll.init();
    let scrollOptions = '{"speed": 800,"easing": "easeInOutQuad"}';

    return (
     <Navbar inverse style={styles.nav}>
         <Navbar.Header>
           <Navbar.Brand>
             <a id="vince" href="#vince" data-scroll data-options={scrollOptions}>Vince Roti</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav pullRight>
             <NavItem data-scroll data-options={scrollOptions} href="#about">About</NavItem>
             <NavItem data-scroll data-options={scrollOptions} href="#portfolio">Portfolio</NavItem>
             <NavItem target="_blank" href="VinceRoti.pdf">Resume</NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
};

export default NavBar
