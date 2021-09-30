import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDom.render(
    <React.StrictMode>
        <Router>
        <App />
        </Router> 
    </React.StrictMode>, 
    document.getElementById('root'));