import React, { Component } from 'react';
import Header from './header';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Portfolio from './portfolio';
import Footer from './footer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { main: "" }
  }

   componentWillMount() {
      let that = this;
      setTimeout(function() {
          that.show();
      }, that.props.wait);
    }

    show(){
      this.setState({"main":
        <ReactCSSTransitionGroup
          transitionName="dom"
          transitionAppear={true}
          transitionAppearTimeout={700}
          transitionEnter={false}
          transitionLeave={false}>
          <Header/>
          <About />
          <Experience />
          <Skills />
          <Portfolio/>
          <Footer />
        </ReactCSSTransitionGroup>
      })
    }

  render() {

    return (
      <div>
        {this.state.main}
      </div>
    );
  }
}

export default Main
