// This file serves as the entry point for the JavaScript application. 
// It initializes the app and renders the main components.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);