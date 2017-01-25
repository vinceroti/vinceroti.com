import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import HoverImage from './hoverImage';

const styles = {
  portfolio: {
    backgroundColor: 'gray',
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '50px'
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
}

class Portfolio extends Component {

  render() {
    return (
      <div style={styles.portfolio} id="portfolio">
        <h2 style={styles.title}> PORTFOLIO </h2>
        <hr style={styles.line}/>
        <Glyphicon glyph="star" style={styles.star} />
        <hr style={styles.line} />
        <div>
          <HoverImage src="images/wiki.png" alt="Wikipedia Logo"/>
          <HoverImage src="images/google.png" alt="Google Maps Logo"/>
        </div>
      </div>
    );
  }
}



export default Portfolio
