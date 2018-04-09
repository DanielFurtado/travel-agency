import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <div>
        <h2 className="section-title">
          <span>{this.props.name}</span>
        </h2>
        <div className="section-content">
          {this.props.product.map(card => (
            <div className="card" key={card.id}>
              <img src={card.imgUrl} alt={card.location}/>
              <div className="location-title">{card.location}</div>
              <div>{card.description}</div>
              <div className="card-price-info-wrapper">
                <div className="card-price-info">
                  <i className="fas fa-user"></i>
                  <span className="card-price-text">{card.priceOne}{card.currency}</span>
                </div>
                <div className="card-price-info">
                  <i className="fas fa-users"></i>
                  <span className="card-price-text">{card.priceTwo}{card.currency}</span>
                </div>
                <div className="card-price-info">
                  <i className="fas fa-user-plus"></i>
                  <span className="card-price-text">{card.priceThree}{card.currency}</span>
                </div>
              </div>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;