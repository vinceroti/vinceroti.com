import React, { Component } from 'react';
import HoverStar from './hoverstar';

class SectionHeader extends Component {

  render() {
    const styles = {
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
    return (
      <div>
        <h2 style={styles.title}> {this.props.section.toUpperCase()} </h2>
        <hr style={styles.line}/>
        <HoverStar />
        <hr style={styles.line} />
      </div>
    );
  }
}



export default SectionHeader
