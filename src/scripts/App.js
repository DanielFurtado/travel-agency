import React, { Component } from 'react';
import logo from '../images/logo/logo_large.png';
import '../css/structure.css';
import data from '../mockups/products.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="travel-agency-logo" alt="logo" />
          <span className="header-title">Travel Agency</span>
        </header>
        <div className="intro">
        {data.products[0].featured.map(item => (
            <div key={item.location}>
              <img src={item.imgUrl} alt={item.location}/>
              <div>{item.location}</div>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
        <footer>
        </footer>        
      </div>
    );
  }
}

export default App;
