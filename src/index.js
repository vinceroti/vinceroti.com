import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import NavBar from './components/navbar';
import Portfolio from './components/portfolio';

import './styles/index.css';

ReactDOM.render(
  <div>
    <NavBar />
    <Header />
    <Portfolio/>
  </div>,
  document.getElementById('root')
);
