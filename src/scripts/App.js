import React, { Component } from 'react';
import logo from '../images/logo/logo_large.png';
import Cards from '../components/card-section';
import Footer from '../components/footer';
import '../css/index.css';
import data from '../mockups/products.json';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header id="header" className="header">
          <div className="header-wrapper">
            <img src={logo} className="travel-agency-logo" alt="logo" />
            <span className="header-title">Travel Agency</span>
          </div>
        </header>
        <div className="container">
          <Cards product={data.products[0].featured} name="Featured" list={false}/>
          <Cards product={data.products[0].algarve} name="Algarve" list={true}/>
          <Cards product={data.products[0].alentejo} name="Alentejo" list={true}/>
        </div>
        <Footer />      
      </div>
    );
  }
}

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 300,
        header = document.getElementById("header");
  
  if (distanceY > shrinkOn) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
}

window.addEventListener("scroll", resizeHeaderOnScroll);

export default App;
