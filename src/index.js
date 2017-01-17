import React from 'react';
import ReactDOM from 'react-dom';
import { Home, NavBar } from './App';
import './styles/index.css';
import './styles/freelancer.less';

ReactDOM.render(
  <div>
    <NavBar />
    <Home />
  </div>,
  document.getElementById('root')
);

