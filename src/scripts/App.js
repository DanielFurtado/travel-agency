import React, { Component } from 'react';
import logo from '../images/logo/logo_large.png';
import Footer from '../components/footer';
import data from '../mockups/products.json';
import '../css/structure.css';

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
            <h2 className="section-title">
              <span>Featured</span>
            </h2>
            <div className="section-content">
              {data.products[0].featured.map(card => (
                <div className="card" key={card.location}>
                  <img src={card.imgUrl} alt={card.location}/>
                  <div className="location-title">{card.location}</div>
                  <div>{card.description}</div>
                  <div><i className="fas fa-user"></i>{card.currency}{card.priceOne}</div>
                  <div><i className="fas fa-users"></i>{card.currency}{card.priceTwo}</div>
                  <div><i className="fas fa-user-plus"></i>{card.currency}{card.priceThree}</div>
                  <button>Book Now</button>
                </div>
              ))}
            </div>

            <h2 className="section-title">
              <span>Algarve</span>
            </h2>
            <div className="section-content">
              {data.products[0].algarve.map(card => (
                <div className="card" key={card.location}>
                  <img src={card.imgUrl} alt={card.location}/>
                  <div className="location-title">{card.location}</div>
                  <div>{card.description}</div>
                  <div><i className="fas fa-user"></i>{card.currency}{card.priceOne}</div>
                  <div><i className="fas fa-users"></i>{card.currency}{card.priceTwo}</div>
                  <div><i className="fas fa-user-plus"></i>{card.currency}{card.priceThree}</div>
                  <button>Book Now</button>
                </div>
              ))}
            </div>

            <h2 className="section-title">
              <span>Alentejo</span>
            </h2>
            <div className="section-content">
              {data.products[0].alentejo.map(card => (
                <div className="card" key={card.location}>
                  <img src={card.imgUrl} alt={card.location}/>
                  <div className="location-title">{card.location}</div>
                  <div>{card.description}</div>
                  <div><i className="fas fa-user"></i>{card.currency}{card.priceOne}</div>
                  <div><i className="fas fa-users"></i>{card.currency}{card.priceTwo}</div>
                  <div><i className="fas fa-user-plus"></i>{card.currency}{card.priceThree}</div>
                  <button>Book Now</button>
                </div>
              ))}
            </div>
        </div>
        <Footer />      
      </div>
    );
  }
}

export default App;
