import React, { Component } from 'react';
import SectionHeader from './section-header';
import { Panel, Accordion } from 'react-bootstrap';

const styles = {
  skills: {
    backgroundColor: 'rgba(245, 245, 245, 0.03)',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  accordion: {
    display: 'inline-block',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '265px',
    fontSize: '16px',
    marginBottom: '0px'
  },
  align: {
    position: 'relative',
    top: '-48.5px',
    marginTop: '40px',
  },
  marginTop: {
    marginTop: '14px'
  },
  marginBottom: {
    marginBottom: '64.5px'
  },
  nestedDiv: {
    paddingTop: '40px'
  }
}

class Skills extends Component {
  render() {
    return (
      <div style={styles.skills} id="skills">
        <SectionHeader styles={styles.section} section="skills"/>
        <div style={styles.nestedDiv}>
          <Accordion  style={styles.accordion}>
            <Panel header="Ruby" eventKey="1" style={styles.marginTop} >
            My first programming language that was introduced to me at Dev Bootcamp. Very user friendly and due to extensive documentation and built-in functions, I can solve technical problems with ease. It is by far my strongest language.
            </Panel>
            <Panel header="HTML5" href="#" eventKey="3">
            HyperText Markup Language, the core of Web Development.
            </Panel>
            <Panel header="JavaScript" eventKey="5">
            My second programming language and an essential tool for Web Development.
            </Panel>
            <Panel header="AJAX" eventKey="7">
            Asynchronous JavaScript and XML, allowing for data retrievel from the back end without have to refresh the page. Very useful for a fluid UX.
            </Panel>
            <Panel header="Git" eventKey="9">
            I believe that having good version control is essential for every project. Committing often with meanful messages makes it easy to fall back to a different version with ease. Also it makes working with team's easier by showing who changed what code and reviewing changes before pushing it to the main project.
            </Panel>
            <Panel header="Heroku" eventKey="11">
            Heroku is a free online hosting service that allows you to host web apps with real domain's. It gave me the ability to get used to using services like AWS, and at Dev Bootcamp I often published small projects to heroku.
            </Panel>
            <Panel header="Capybara" eventKey="13">
            Capybara helps you test web applications by simulating how a real user would interact with your app. It was used in Rail's applications I built at Dev Bootcamp.
            </Panel>
            <Panel header="RSpec" eventKey="15">
            RSpec is ruby's testing suite. At Dev Bootcamp, testing always came first so for every web app I made and console app there was always tests that came along with it.
            </Panel>
            <Panel header="OSX" eventKey="17">
            I am very familar with the Mac OS and am comfortable being put into a Mac environment.
            </Panel>
          </Accordion>
          <Accordion  style={{...styles.accordion, ...styles.align}}>
            <Panel style={styles.marginTop} header="Rails" eventKey="2">
            Ruby on Rails, or simply Rails, is a server-side web application framework written in Ruby. Rails is a MVC framework, providing default structures for a database, a web service, and web pages. One of the last three weeks at Dev Bootcamp consisted of developing and testing in the Rails framework.
            </Panel>
            <Panel header="CSS" eventKey="4">
            Having well designed and responsive web is my number one rule for building web apps. CSS allows me to do that and is one of the core tool's for web development.
            </Panel>
            <Panel header="React.js" eventKey="6">
            React is a JavaScript library for building user interfaces. Maintained and developed by Facebook. It is my first JavaScript framework and what this current site is built on! I had no prior knowledge about React before this project.
            </Panel>
            <Panel header="JQuery" eventKey="8">
            JQuery is a JavaScript library that allows for easy DOM traversal and manipulation. At Dev Bootcamp, I used it to make AJAX calls and manipulate the DOM. My current goal is to ditch JQuery and attempt replicate features with VanillaJS.
            </Panel>
            <Panel header="Google Maps API" eventKey="10">
            One of the projects I built at Dev Bootcamp was an iOS app, during the project I focused on the backend which was connected to the Google Maps API. I would ping google maps with keywords and send a reformated JSON object back to the front end.
            </Panel>
            <Panel header="Test Driven Development"  className="tdd" eventKey="12">
            Test-driven development is a development technique where you must first write a test that fails before you write new functional code. It was one of the core foundations at Dev Bootcamp.
            </Panel>
            <Panel header="Jasmine" eventKey="14">
            Jasmine is the testing suite for JavaScript. For every JavaScript app that was built at Dev Bootcamp, tests where always made as well.
            </Panel>
            <Panel header="Linux" eventKey="16">
            My current laptop is Ubuntu and is my current favorite OS.
            </Panel>
          </Accordion>
        </div>
      </div>
    );
  }
}



export default Skills
