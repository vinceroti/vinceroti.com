import reactCSS, { hover } from 'reactcss';
import React, { Component } from 'react';


class HoverImage extends Component {

  render() {
    const styles = reactCSS({
      default: {
        image: {
          marginLeft: '20px',
          marginRight: '20px',
          display: 'inline-block',
          margin: 'auto',
          marginTop: '40px',
          width: '300px',
          maxWidth: '90%',
          verticalAlign: 'middle',
          WebkitTransform: 'perspective(1px) translateZ(0)',
          transform: 'perspective(1px) translateZ(0)',
          boxShadow: '0 0 1px transparent',
          WebkitTransitionDuration: '0.3s',
          transitionDuration: '0.3s',
          WebkitTransitionProperty: 'transform',
          transitionProperty: 'transform',
        }
      },
      hover: {
        image: {
          WebkitTransform: 'scale(1.1)',
          transform: 'scale(1.1)'
        }
      }
    }, this.props)

    return (
      <img style={{...styles.image, ...this.props.extraStyle }} src={this.props.src} alt={this.props.alt} />
    );
  }
}


export default hover(HoverImage)
