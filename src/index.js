import React from 'react';
import ReactDOM from 'react-dom';
import { Home, NavBar } from './App';
import './styles/index.css';

ReactDOM.render(
  <div>
    <NavBar />
    <Home />
  </div>,
  document.getElementById('root')
);

