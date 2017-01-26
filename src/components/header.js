import React, { Component } from 'react';
import HoverStar from './hoverstar';
import { SocialIcon } from 'react-social-icons';


const styles = {

  title: {
    paddingTop: '30px',
    fontSize: '20px',
  },

  name: {
    fontSize: '50px',
    fontWeight: 'bold'
  },

  header: {
    marginTop: '130px',
    textAlign: 'center',
    color: 'white',
    paddingBottom: '200px'
  },

  line: {
    padding: '0',
    border: 'none',
    borderTop: 'solid 5px',
    textAlign: 'center',
    width: '100px',
    maxWidth: '20%',
    margin: 'auto',
    backgroundColor: '#18BC9C',
    color: 'white',
    display: 'inline-block',
    borderRadius: '250px'

  },

  star: {
    display: 'inline-block',
    position: 'relative',
    top: '11px',
    fontSize: '2em',
    padding: '0 0.25em',
    borderColor: 'white',
  },

  vince: {
    WebkitBoxShadow: '0px 0px 32px 0px rgba(0,0,0,0.75)',
    MozBoxShadow: '0px 0px 32px 0px rgba(0,0,0,0.75)',
    boxShadow: '0px 0px 32px 0px rgba(0,0,0,0.75)',
    marginTop: '20px',
    borderRadius: '250px',
    width: '250px',
    height: '250px',
  },
  icon: {
    marginTop: '30px',
    marginLeft: '10px',
    marginRight: '10px',
    borderRadius: '0px',
  }

}



class Header extends Component {
  render() {

    return (
      <div style={styles.header}>
        <img style={styles.vince} src="images/vince.jpg" alt="Vince Roti"/>
        <h1 style={styles.name}> Vince Roti </h1>
        <hr style={styles.line}/>
          <HoverStar/>
        <hr style={styles.line} />
        <h4 style={styles.title}> Web Developer </h4>
        <div  >
          <SocialIcon style={styles.icon} url="http://linkedin.com/in/vinceroti" />
          <SocialIcon style={styles.icon} url="https://github.com/vinceroti" color="white"/>
        </div>
      </div>
    );
  }
}

export default Header
