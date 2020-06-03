import React, { Component } from 'react';
import { render } from 'react-dom';
import MyForm from './myForm';
import './style.css';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <MyForm />
      </div>
    );
  }
}

render(<HashRouter basename='/'><App /></HashRouter>, document.getElementById('root'));
