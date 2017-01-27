import React, { Component } from 'react';
import HoverStar from './hoverstar';
import HoverImage from './hoverImage';
import SectionHeader from './section-header';

const styles = {
  portfolio: {
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
}

class Portfolio extends Component {

  render() {
    return (
      <div style={styles.portfolio} id="portfolio">
        <SectionHeader section="portfolio"/>
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
