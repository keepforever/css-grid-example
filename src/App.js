import React, { Component } from 'react';
import MyGrid from './comps/MyGrid/MyGrid'
import Alpha from './comps/Alpha/Alpha';
import Beta from './comps/Beta/Beta';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Beta />
        {/* <Alpha />
        <br/> */}
        {/* <MyGrid /> */}
      </div>
    );
  }
}

export default App;
