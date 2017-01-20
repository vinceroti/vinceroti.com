import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './header';
import { NavBar } from './navbar';
import './styles/index.css';

ReactDOM.render(
  <div>
    <NavBar />
    <Header />
  </div>,
  document.getElementById('root')
);

