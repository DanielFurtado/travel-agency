import React, { Component } from 'react';
import logo from '../images/logo/logo_large.png';
import Cards from '../components/card-section';
import Footer from '../components/footer';
import '../css/structure.css';
import data from '../mockups/products.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="header-wrapper">
            <img src={logo} className="travel-agency-logo" alt="logo" />
            <span className="header-title">Travel Agency</span>
          </div>
        </header>
        <div className="container">
          <Cards product={data.products[0].featured} name="Featured" grid="flex-5-cols"/>
          <Cards product={data.products[0].algarve} name="Algarve" grid="flex-1-col"/>
          <Cards product={data.products[0].alentejo} name="Alentejo" grid="flex-1-col"/>
        </div>
        <Footer />      
      </div>
    );
  }
}

export default App;
