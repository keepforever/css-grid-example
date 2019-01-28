import React, { Component } from 'react';
import './beta.css';

class Alpha extends Component {

  render () {
    return (
      <div className="grid">
        <div className="title">
          <ul className="my-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
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
