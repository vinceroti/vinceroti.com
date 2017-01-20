import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';


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
    textAlign: 'center',
    color: 'white',
  },

  line: {
    padding: '0',
    border: 'none',
    borderTop: 'solid 5px',
    textAlign: 'center',
    width: '18%',
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
  }

}



class Header extends Component {
  render() {

    return (
      <div style={styles.header}>
        <img style={styles.vince} src="vince.jpg" alt="Vince Roti"/>
        <h1 style={styles.name}> Vince Roti </h1>
        <hr style={styles.line}/>
          <Glyphicon glyph="star" style={styles.star} />
        <hr style={styles.line} />
        <h4 style={styles.title}> Web Developer </h4>
      </div>
    );
  }
}

export { Header };
