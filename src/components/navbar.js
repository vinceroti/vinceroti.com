import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import smoothScroll from 'smooth-scroll';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { padding: '0px', fontSize: '18px' }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentWillMount() {
    smoothScroll.init();
    if (window.innerWidth >= 768){
      this.setState({ padding: '20px', fontSize: '24px'});
    }
  }

  componentDidMount(){
    let elm = document.querySelector('body');
    const self = this;
    window.addEventListener('scroll', function(e) {
      if (window.innerWidth >= 768) {
        if (window.scrollY > 30 ){
          self.setState({padding: '0px', fontSize: '18px'})
        } else {
          self.setState({padding: '20px', fontSize: '24px'})
        }
      }
    });


    let resize = function(){
      if (window.innerWidth >= 768 && elm.scrollTop <= 30){
        self.setState({ padding: '20px', fontSize: '24px'});
      } else {
        self.setState({padding: '0px', fontSize: '18px'});
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
        paddingBottom: this.state.padding
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
    let scrollOptions = '{"speed": 800,"easing": "easeInOutQuad"}';

    return (
     <Navbar inverse style={{...styles.nav, ...styles.trans }} >
        <Navbar.Header>
           <Navbar.Brand>
            <a style={{ ...styles.trans, ...styles.fontSize }} id="vince" href="#vince" data-scroll data-options={scrollOptions}>Vince Roti</a>
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
