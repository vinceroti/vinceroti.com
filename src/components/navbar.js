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
}

class NavBar extends Component {
  render() {
    smoothScroll.init();
    let scrollOptions = '{"speed": 800,"easing": "easeInOutQuad"}';

    return (
     <Navbar inverse style={styles.nav} >
         <Navbar.Header>
           <Navbar.Brand>
            <a id="vince" href="#vince" data-scroll data-options={scrollOptions}>Vince Roti</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav pullRight>
             <NavItem data-scroll data-options={scrollOptions} id="about-nav" href="#about">About</NavItem>
             <NavItem data-scroll data-options={scrollOptions} id="experience-nav" href="#experience">Experience</NavItem>
             <NavItem data-scroll data-options={scrollOptions} id="skills-nav" href="#skills">Skills</NavItem>
             <NavItem data-scroll data-options={scrollOptions} id="portfolio-nav" href="#portfolio">Portfolio</NavItem>

             <NavItem target="_blank" href="VinceRoti.pdf">Resume</NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
};

export default NavBar
