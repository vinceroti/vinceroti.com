import React, { Component } from 'react';
import SectionHeader from './section-header';

const styles = {
  experience: {
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
}

class Experience extends Component {
  render() {
    return (
      <div style={styles.experience} id="experience">
        <SectionHeader section="experience"/>
      </div>
    );
  }
}



export default Experience
