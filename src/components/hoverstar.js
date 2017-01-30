import reactCSS, { hover } from 'reactcss';
import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';



class HoverStar extends Component {
  render() {

    const styles = reactCSS({

      default: {
        star: {
          color: 'white',
          display: 'inline-block',
          position: 'relative',
          top: '11px',
          fontSize: '2em',
          padding: '0 0.25em',
          borderColor: 'white',
          WebkitTransition: '-webkit-transform .8s ease-in-out',
          transition: 'transform .8s ease-in-out'
        },
      },
      hover: {
        star: {
          WebkitTransform: 'rotate(360deg)',
          transform: 'rotate(360deg)'
        }
      }
    }, this.props)


    return (
      <Glyphicon glyph="star" style={styles.star} />
    );
  }
}

export default hover(HoverStar)
