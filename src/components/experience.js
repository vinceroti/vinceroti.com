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
  paragraph:{
    display: 'inline-block',
    verticalAlign: 'right',
    textAlign: 'left',
    fontSize: '22px',
    paddingBottom: '25px',
    width: '57%',
    minWidth: '350px',
  },
  date: {
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: '60px',
    marginLeft: '60px',
    marginBottom: '30px'
  },
  title:{
    marginTop: '24px',
    marginBottom: '30px',
    fontWeight: 'bold'
  },
  footer:{
    fontSize: '24px',
    margin: '20px 10px 0px 10px'
  }
}

class Experience extends Component {
  render() {
    return (
      <article style={styles.experience} id="experience">
        <SectionHeader section="experience"/>
        <div>
          <h2 style={styles.title}>
            Dev Bootcamp
          </h2>
          <h4 style={styles.date}>
            08/2016 - 12/2016
          </h4>
          <div style={styles.paragraph} >
            <p>
              Dev Bootcamp is a 19-week intensive training program for aspiring web developers, specializing in Ruby, Rails, HTML5, CSS, Test Driven Development, Object-Oriented Javascript (AJAX, JQuery), Git and Source control, Heroku and Agile Development.
            </p>
            <p>
              The first 9 weeks of the program are remote, while the second 9 weeks are an immersive in-class experience. The program also addresses intra- and interpersonal strategies to fostering optimal learning and team work environments.
            </p>
            <p>
            - Gained skills to learn new languages, frameworks, libraries, and conventions quickly
            </p>
            <p>
            - Programmed in various dynamics such as pair programming, solo programming, and group
            </p>
          </div>
          <p style={styles.footer}>
          For all other non-technical related work experience. Please refer to my resume located <a target="_blank" href="VinceRoti.pdf">here</a>.
          </p>
        </div>
      </article>
    );
  }
}



export default Experience
