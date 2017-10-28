import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import TeslaCar from './components/TeslaCar/TeslaCar';
import TeslaBattery from './containers/TeslaBattery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaCar />
        <TeslaBattery />
      </div>
    );
  }
}

export default App;
