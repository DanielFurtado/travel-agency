import React, { Component } from 'react';
import logo from '../images/logo/logo_large.png';
import Cards from '../components/card-section';
import Footer from '../components/footer';
import '../css/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }

  componentDidMount() {
    let self = this;
    fetch("/api/products")
    .then(response => {
      if (response.status !== 200) {
        console.log("Looks like there was a problem. Status Code: " + response.status);
        return;
      }
      return response.json();
    })
    .then(data => {
        let sections = data.products.map(section => {
          return(
            <Cards key={section.name} product={section.items} name={section.name} list={section.list}/>
          );
        });
      self.setState({sections: sections});
    })
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });
  }

  render() {
    return (
      <div className="app">
        <header id="header" className="header">
          <div className="header-wrapper">
            <img src={logo} className="travel-agency-logo" alt="logo" />
            <span className="header-title">Travel Agency</span>
          </div>
        </header>
        <main className="container">
          {this.state.sections}
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
