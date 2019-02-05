import React, { Component } from 'react';
import './beta.css';

class Alpha extends Component {

  render () {
    return (
      <div className="grid">
        <div className="title">
          <ul className="my-list">
            <li className="nav-item">li 1</li>
            <li className="nav-item">li 2</li>
            <li className="nav-item">li 3</li>
          </ul>
        </div>
        <div className="header">Header</div>
        <div className="sidebar">Sidebar</div>
        <div className="content">Content</div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default Alpha
