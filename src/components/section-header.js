import React, { Component } from 'react';
import HoverStar from './hoverstar';
import Waypoint from 'react-waypoint';


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

      title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '40px',
        letterSpacing: '2.5px'
      },
    }
    return (
      <div>
        <h2 style={styles.title}> {this.props.section.toUpperCase()} </h2>
        <Waypoint
           onEnter={() => {
             let el = document.querySelector(`#${this.props.section}-nav`)
             el.style.color = "white"
           }}
           onLeave={() => {
             let el = document.querySelector(`#${this.props.section}-nav`)
             el.style.color = "gray"
           }}
        />
        <hr style={styles.line}/>
        <HoverStar />
        <hr style={styles.line} />
      </div>
    );
  }
}



export default SectionHeader
