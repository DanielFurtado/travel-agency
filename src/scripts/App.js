import React, { Component } from 'react';
import logo from '../images/logo/logo_large.png';
import Cards from '../components/card-section';
import Footer from '../components/footer';
import '../css/index.css';
import data from '../mockups/products.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
         product: data.featured, 
         name: "Featured", 
         list: false 
        },
        {
          product: data.algarve, 
          name: "Algarve", 
          list: true 
        },
        {
          product: data.alentejo, 
          name: "Alentejo", 
          list: true 
        }
      ]
    };
  }

  render() {
    let section = this.state.products.map(function(section) {
      return(
        <Cards key={section.name} product={section.product} name={section.name} list={section.list}/>
      );
    });

    return (
      <div className="app">
        <header id="header" className="header">
          <div className="header-wrapper">
            <img src={logo} className="travel-agency-logo" alt="logo" />
            <span className="header-title">Travel Agency</span>
          </div>
        </header>
        <main className="container">
          {section}
        </main>
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
