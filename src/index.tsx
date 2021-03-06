import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Avatar from './components/avatar';
import Lista from './components/lista'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Lista />
    <Avatar />
  </React.StrictMode>,
  document.getElementById('root')
);

