import React from 'react';
import ReactDOM from 'react-dom';
import { Header, NavBar } from './App';
import './styles/index.css';
import './styles/freelancer.less';

ReactDOM.render(
  <div>
    <NavBar />
    <Header />
  </div>,
  document.getElementById('root')
);

