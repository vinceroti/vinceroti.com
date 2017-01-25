import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NavBar from './components/navbar';
import Portfolio from './components/portfolio';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './styles/index.css';

ReactDOM.render(
  <div>
    <NavBar />
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={700}
      transitionEnter={false}
      transitionLeave={false}>
      <Header />
    </ReactCSSTransitionGroup>
    <Portfolio/>
  </div>,
  document.getElementById('root')
);
