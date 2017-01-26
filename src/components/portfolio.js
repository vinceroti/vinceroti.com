import React, { Component } from 'react';
import HoverStar from './hoverstar';
import HoverImage from './hoverImage';

const styles = {
  portfolio: {
    backgroundColor: 'rgba(245, 245, 245, 0.03)',
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '40px'
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
        <HoverStar />
        <hr style={styles.line} />
        <div>
          <a href="https://github.com/kangkg/dbc-wikipedia-clone">
            <HoverImage src="images/wiki.png" alt="Wikipedia Logo"/>
          </a>
          <a href="https://github.com/TrRo26/remind_rails">
            <HoverImage src="images/google.png" alt="Google Maps Logo"/>
          </a>
        </div>
      </div>
    );
  }
}



export default Portfolio
