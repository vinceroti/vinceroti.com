import reactCSS, { hover } from 'reactcss';
import React, { Component } from 'react';


class HoverImage extends Component {

  render() {
    const styles = reactCSS({
      default: {
        image: {
          display: 'inline-block',
          margin: 'auto',
          marginTop: '20px',
          width: '250px',
          maxWidth: '90%',
        }
      },
      hover: {
        image: {
          backgroundColor: 'red'
        }
      }
    }, this.props)

    return (
      <img style={styles.image} src={this.props.src} alt={this.props.alt} />
    );
  }
}


export default hover(HoverImage)
