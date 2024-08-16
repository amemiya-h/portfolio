import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Maintenance from './components/Maintenance';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import Article from './components/Article';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div id='container'>
      <div id='header'>
        <p>a</p>
      </div>

      <div id='content'>
        <Navbar id='navbar' />
        <Article id='main' />
      </div>

      <div id='footer'>
        <p>
        雨宮葉流 © 2024 
        </p>
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
