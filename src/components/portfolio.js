import React, { Component } from 'react';
import HoverImage from './hoverImage';
import SectionHeader from './section-header';
import { SocialIcon } from 'react-social-icons';
import { Modal, Button } from 'react-bootstrap';

const styles = {
  portfolio: {
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  title: {
    border: 0,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: '0'
  },
  icon: {
    float: 'left',
  },
  modalButton: {
    marginTop: '18px',
    outline: '0'
  }
}

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = { showWiki: false, showRemind: false, showMessage: false };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }


  close(show) {
    this.setState({ [show]: false });
  }

  open(show) {
    this.setState({ [show]: true });
  }
  render() {
    return (
      <article style={styles.portfolio} id="portfolio">
        <div>
          <Modal  dialogClassName="custom-modal"show={this.state.showWiki} onHide={()=>{this.close("showWiki")}}>
            <Modal.Header style={styles.title} closeButton>
              <SectionHeader effect={false} customSize="30px" section="Wikipedia Clone"/>
            </Modal.Header>
            <Modal.Body>
              <p>As a client project at Dev Bootcamp, we were asked to create a Wikipedia clone. Users are allowed to create Pages, revisions, and see previous revisions side by side. Majority of the features are replicated and functioning. We focused extensively on testing during this project and agile development </p>

              <p>Tech – Ruby on Rails, Ajax, jQuery, and Circle CI.</p>

              <p>Roles – Front-end and Backend. </p>

            </Modal.Body>
            <Modal.Footer>
              <SocialIcon style={styles.icon} url="https://github.com/kangkg/dbc-wikipedia-clone" color="white"/>
              <Button style={styles.modalButton} onClick={()=>{this.close("showWiki")}}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Modal  dialogClassName="custom-modal"show={this.state.showRemind} onHide={()=>{this.close("showRemind")}}>
            <Modal.Header style={styles.title} closeButton>
              <SectionHeader effect={false} customSize="30px" section="Remind"/>
            </Modal.Header>
            <Modal.Body>
              <p>Remind is an iOS app that allows users to create a list of items that they want to buy at a store. It will find locations that have that item and notify you when you are near by the location that has that item.</p>

              <p>Tech – Ruby on Rails, Google Maps API, Heroku, Swift and xCode.</p>

              <p>Roles – Back-end rails RESTful API which talked to Google Maps and the iOS app.</p>

            </Modal.Body>
            <Modal.Footer>
              <SocialIcon style={styles.icon}  url="https://github.com/TrRo26/remind_rails" color="white"/>
              <Button style={styles.modalButton} onClick={()=>{this.close("showRemind")}}>Close</Button>
            </Modal.Footer>
          </Modal>
          <div>
            <Modal  dialogClassName="custom-modal"show={this.state.showMessage} onHide={()=>{this.close("showMessage")}}>
              <Modal.Header style={styles.title} closeButton>
                <SectionHeader effect={false} customSize="30px" section="React Live Message"/>
              </Modal.Header>
              <Modal.Body>
                <p>React Live Message is a small single page application to display how web sockets work with React.js and express. You can talk to two clients at the same time and see all messages in real time. All of the chat is presisted to a non-sql database called MongoDB. Link to live page is located <a target="_blank" href="https://react-livechat.herokuapp.com">here</a>.</p>

                <p>Tech – React.js, Express, MongoDB</p>

                <p>Roles – Front-end and Backend. </p>

              </Modal.Body>
              <Modal.Footer>
                <SocialIcon style={styles.icon} url="https://github.com/vinceroti/react-livechat" color="white"/>
                <Button style={styles.modalButton} onClick={()=>{this.close("showMessage")}}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <SectionHeader section="portfolio"/>
        <div>
          <button style={styles.button} onClick={()=>{this.open("showWiki")}}>
            <HoverImage src="images/wiki.png" alt="Wikipedia Logo"/>
          </button>
          <button style={styles.button} onClick={()=>{this.open("showRemind")}}>
            <HoverImage src="images/iphone.png"  alt="iPhone Logo"/>
          </button>
          <button style={styles.button} onClick={()=>{this.open("showMessage")}}>
            <HoverImage src="images/message.svg"  alt="Message Logo"/>
          </button>
        </div>
      </article>
    );
  }
}



export default Portfolio
