import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import SmoothScroll from 'smooth-scroll';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.topScrollState = { padding: '20px', fontSize: '24px' };
    this.afterScrollState = { padding: '0px', fontSize: '18px' };
    this.state = this.topScrollState;
  }

  componentWillMount() {
    new SmoothScroll('a[href*="#"]', {"speed": 800,"easing": "easeInOutQuad"});
    if (window.innerWidth >= 768){
      this.setState(this.topScrollState);
    }
  }

  componentDidMount(){
    let elm = document.querySelector('body');
    const self = this;
    window.addEventListener('scroll', function(e) {
      let scroll = window.scrollY || document.documentElement.scrollTop;
      if (window.innerWidth >= 768) {
        if (scroll > 30 ){
          self.setState(self.afterScrollState);
        } else {
          self.setState(self.topScrollState);
        }
      }
    });


    let resize = function(){
      if (window.innerWidth >= 768 && elm.scrollTop <= 30){
        self.setState(self.topScrollState);
      } else {
        self.setState(self.afterScrollState);
      }
    }


    window.onresize = resize();
  }

  render() {
    const styles = {
      nav: {
        zIndex: '99',
        top: '0px',
        position: 'fixed',
        width: '100%',
        overFlow: 'hidden',
        border: 'rgba(8, 8, 8, 0)',
        paddingTop: this.state.padding ,
        paddingBottom: this.state.padding,
      },
      trans: {
        WebkitTransition: 'all 0.3s ease',
        transition: 'all 0.3s ease',
        MozTransition: 'all 0.3s ease',
        Otransition: 'all 0.3s ease'
      },
      fontSize: {
        fontSize: this.state.fontSize
      }
    }

    return (
     <Navbar inverse style={{...styles.nav, ...styles.trans }} >
        <Navbar.Header>
           <Navbar.Brand>
            <a style={{ ...styles.trans, ...styles.fontSize }} id="vince" href="#vince">Vince Roti</a>
           </Navbar.Brand>
           <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
           <Nav pullRight>
             <NavItem id="about-nav" href="#about">About</NavItem>
             <NavItem id="experience-nav" href="#experience">Experience</NavItem>
             <NavItem id="skills-nav" href="#skills">Skills</NavItem>
             <NavItem id="portfolio-nav" href="#portfolio">Portfolio</NavItem>

             <NavItem target="_blank" href="VinceRoti.pdf">Resume</NavItem>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
    );
  }
};

export default NavBar
