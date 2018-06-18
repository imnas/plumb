import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Routes from './routes';

class App extends Component {
    render() {
        return(
        <Routes></Routes>
        )
    }
}

ReactDOM.render(<App /> , document.getElementById('root'));
