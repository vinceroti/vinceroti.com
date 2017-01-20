import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './header';
import { NavBar } from './navbar';
import { Portfolio } from './portfolio';

import './styles/index.css';

ReactDOM.render(
  <div>
    <NavBar />
    <Header />
    <Portfolio />
  </div>,
  document.getElementById('root')
);

