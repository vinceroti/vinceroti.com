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
  list: {
    listStyle: "none"
  },
  paragraph:{
    display: 'inline-block',
    fontSize: '22px',
    paddingBottom: '25px',
    margin: 'auto',
    width: '70%',
    minWidth: '250px',
  },
  date: {
    display: 'inline-block',
    verticalAlign: 'top'
  }
}

class Experience extends Component {
  render() {
    return (
      <div style={styles.experience} id="experience">
        <SectionHeader section="experience"/>
        <div>
          <h2>
            Dev Bootcamp
          </h2>
          <hr/>
          <h4 style={styles.date}>
            Augest 2016 - December 2016
          </h4>
          <div style={styles.paragraph} >
            <p>
              Dev Bootcamp is a 19-week intensive training program for aspiring web developers, specializing in Ruby, Rails, HTML5, CSS, Test Driven Development, Object-Oriented Javascript (AJAX, JQuery), Git and Source control, Heroku and Agile Development.
            </p>
            <p>
              The first 9 weeks of the program are remote, while the second 9 weeks are an immersive in-class experience. The program also addresses intra- and interpersonal strategies to fostering optimal learning and team work environments.
            </p>
            <ul style={styles.list}>
              <li>
              - Gained skills to learn new languages, frameworks, libraries, and conventions quickly
              </li>
              <li>
              - Programmed in various dynamics such as pair programming, solo programming, and group collaboration
              </li>
            </ul>
          </div>
          <h3>
          For all other non-technical related work experience. Please refer to resume located <a target="_blank" href="VinceRoti.pdf">here</a>.
          </h3>
        </div>
      </div>
    );
  }
}



export default Experience
