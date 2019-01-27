import React, { Component } from 'react';
import MyGrid from './comps/MyGrid/MyGrid'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>balls</h1>
        <MyGrid />
      </div>
    );
  }
}

export default App;
