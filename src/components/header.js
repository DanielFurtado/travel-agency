import React, { Component } from 'react';
import logo from '../images/logo/logo_large.png';

class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="header-wrapper">
          <img src={logo} className="travel-agency-logo" alt="logo" />
          <span className="header-title">Travel Agency</span>
        </div>
      </header>
    )
  }
}

export default Header;