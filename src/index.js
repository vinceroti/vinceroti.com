import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import Main from './components/main';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './styles/index.css';

ReactDOM.render(
  <div>
    <ReactCSSTransitionGroup
      transitionName="navbar"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <NavBar />
    </ReactCSSTransitionGroup>
    <Main wait={500}/>z
  </div>,
  document.getElementById('root')
);
