import React, { Component } from 'react';

const styles = {
  footer: {
    width:'100%',
    height:'30px',
  },
  p: {
    width:'100%',
    fontSize: '12px',
    textAlign: 'center',
    paddingTop: '6px',
    color: 'white'
  }
}

class Footer extends Component {

  render() {
    return (
     <footer style={styles.footer}>
      <div style={styles.p}> Copyright © Vince Roti 2017 </div>
     </footer>
    );
  }
};

export default Footer
