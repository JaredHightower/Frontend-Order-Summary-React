import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { Background } from './Layout/GridContainer';


ReactDOM.render(
  <Background>
    <App />
  </Background>,
  document.getElementById('root')
);

