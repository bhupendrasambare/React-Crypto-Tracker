import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// bootstrap
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
  </React.StrictMode>
);
