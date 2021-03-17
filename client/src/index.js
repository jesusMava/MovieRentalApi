import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/routes'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

