import React from 'react';
import './App.css';

import Article from './pages/Article';
import Maintenance from './pages/Maintenance';

import Header from './components/Header'
import Footer from './components/Footer';

function App() {
    return (
        <div id='container'>
            <div id='header'>
                <Header />
            </div>
    
            <div id='content'>
                <Maintenance />
            </div>
    
            <div id='footer'>
                <Footer />
            </div>
        </div>
    );
  }

export default App