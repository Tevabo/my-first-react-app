import React, { Component } from 'react';
import logo from './logo.svg';
import Title from './Title'
import LightSwitch from './LightSwitch'
import User from './User'

import './App.css';
import UserBoard from './UserBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <div><UserBoard content="UserBoard" />
            <User name="Alice" />
            <User name="Bob" />
            <User name="Ol' Jimbo" />
            <User name="Krombopulos Michael" />
          </div>
          <Title content="Some Simple Title" />
          <LightSwitch />
        </header>

        <main>
        </main>
      </div>
    );
  }
}

export default App;


