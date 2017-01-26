import React, { Component } from 'react';
import HoverStar from './hoverstar';

const styles = {
  about: {
    backgroundColor: 'rgba(245, 245, 245, 0.03)',
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '30px'
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
    borderRadius: '250px',

  },

  star: {
    display: 'inline-block',
    position: 'relative',
    top: '11px',
    fontSize: '2em',
    padding: '0 0.25em',
    borderColor: 'white',
  },

  title: {
    fontWeight: 'bold',
    fontSize: '40px',
    letterSpacing: '2.5px'
  },
  paragraph:{
    fontSize: '16px',
    margin: '30px 60px 30px 60px'
  }
}

class About extends Component {

  render() {
    return (
      <div style={styles.about} id="about">
        <h2 style={styles.title}> ABOUT </h2>
        <hr style={styles.line}/>
        <HoverStar />
        <hr style={styles.line} />
        <div style={styles.paragraph}>
          <p>
          I'm a recent graduate from Dev Bootcamp which is a 19 week intensive Full Stack web development training program and am now looking for a new opportunities in the web development field, weather that be front-end or full stack development.
          </p>
        </div>
      </div>
    );
  }
}



export default About
