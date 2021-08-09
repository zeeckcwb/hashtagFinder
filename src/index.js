import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import Main from './components/main/main'
import Footer from './components/footer/footer'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);