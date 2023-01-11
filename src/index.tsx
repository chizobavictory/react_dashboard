import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {DarkModeProvider}  from './context/darkModeContext';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  root
);
