import React, { Component } from 'react';
import SectionHeader from './section-header';
import { Panel, Accordion } from 'react-bootstrap';

const styles = {
  skills: {
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  accordion: {
    display: 'inline-block',
    paddingTop: '40px',
    paddingLeft: '25px',
    paddingRight: '25px',
    width: '35%',
    minWidth: '300px',
  },
  align: {
    position: 'relative',
    top: '-43.74px'
  }
}

class Skills extends Component {

  render() {
    return (
      <div style={styles.skills} id="skills">
        <SectionHeader section="skills"/>
        <Accordion id="1" style={styles.accordion}>
          <Panel header="Ruby" eventKey="1">
          </Panel>
          <Panel header="HTML5" eventKey="3">
          </Panel>
          <Panel header="JavaScript" eventKey="5">
          </Panel>
          <Panel header="AJAX" eventKey="7">
          </Panel>
          <Panel header="Git" eventKey="9">
          </Panel>
          <Panel header="Heroku" eventKey="11">
          </Panel>
          <Panel header="Capybara" eventKey="13">
          </Panel>
          <Panel header="RSpec" eventKey="15">
          </Panel>
          <Panel header="OSX" eventKey="17">
          </Panel>
        </Accordion>
        <Accordion id="2" style={{...styles.accordion, ...styles.align}}>
          <Panel header="Rails" eventKey="2">
          </Panel>
          <Panel header="CSS" eventKey="4">
          </Panel>
          <Panel header="React.js" eventKey="6">
          </Panel>
          <Panel header="JQuery" eventKey="8">
          </Panel>
          <Panel header="Google Maps API" eventKey="10">
          </Panel>
          <Panel header="Test Driven Development" eventKey="12">
          </Panel>
          <Panel header="Jasmine" eventKey="14">
          </Panel>
          <Panel header="Linux" eventKey="16">
          </Panel>
        </Accordion>

      </div>
    );
  }
}



export default Skills
