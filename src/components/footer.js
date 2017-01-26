import React, { Component } from 'react';

const styles = {
  footer: {
    width:'100%',
    height:'30px',
    position: 'absolute'
  },
  p: {
    fontSize: '12px',
    textAlign: 'center',
    paddingTop: '6px',
    color: 'white'
  }
}

class Footer extends Component {

  render() {
    return (
     <div style={styles.footer}>
      <div style={styles.p}> Copyright © Vince Roti 2017 </div>
     </div>
    );
  }
};

export default Footer
