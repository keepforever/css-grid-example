import React, { Component } from 'react';
import Beta from './comps/Beta/Beta';
import Colide from './comps/Colide';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Colide />
        <Beta />
        {/*  <Beta />
       <Colide />
        <Alpha />
        <br/> */}
        {/* <MyGrid /> */}
      </div>
    );
  }
}

export default App;
