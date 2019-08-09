import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Router from './router.js';

const container = document.getElementById('app');

ReactDOM.render(<Router />, container);