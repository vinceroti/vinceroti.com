import React, { Component } from 'react';
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
    minWidth: '300px',
    fontSize: '22px',
  }
}

class About extends Component {

  render() {
    return (

      <article style={styles.about}  id="about">
        <SectionHeader section="about"/>
        <div style={styles.paragraph}>
          <p>
          My name is Vince Roti and I am hard-working, positive, and supportive team member. Aside from those initial qualities, I strive in helping others achieve success to ultimately grow as a team. I’m also not afraid of trying new things and taking risks to fulfill goals, in order to create unique and beautiful things. Being able to share what I create with the world is the driving force that truly makes me so passionate about coding.
          </p>
          <br/>
          <p>
          Recently, I graduated from Dev Bootcamp, which is a 19-week, intensive, Full Stack web development training program. With all of that being said, I am now currently looking for a new opportunity within the web development field, whether it's front-end or full stack development.
          </p>
        </div>
      </article>
    );
  }
}



export default About
