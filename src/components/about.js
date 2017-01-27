import React, { Component } from 'react';
import HoverStar from './hoverstar';
import SectionHeader from './section-header';

const styles = {
  about: {
    backgroundColor: 'rgba(245, 245, 245, 0.03)',
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  paragraph:{
    paddingTop: '40px',
    paddingBottom: '25px',
    margin: 'auto',
    width: '70%',
    minWidth: '250px',
    fontSize: '22px',
  }
}

class About extends Component {

  render() {
    return (

      <div style={styles.about}  id="about">
        <SectionHeader section="about"/>
        <div style={styles.paragraph}>
          <p>
          I'm a recent graduate from Dev Bootcamp, which is a 19 week intensive Full Stack web development training program and am now looking for a new opportunities in the web development field, whether it's front-end or full stack development.
          </p>
        </div>
      </div>
    );
  }
}



export default About
