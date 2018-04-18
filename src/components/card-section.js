import React, { Component } from 'react';

class CardPriceInfo extends Component {
  render() {
    var className = "card-price-info";
    if(this.props.price === null){
      className = "card-price-info hidden"
    }
    return (
      <div className={className}>
        <i className={this.props.icon}></i>
        <span className="card-price-text">{this.props.price}{this.props.currency}</span>
      </div>  
    );
  }
}

class Cards extends Component {
  render() {
    return (
      <div>
        <h2 className="section-title">
          <button className="btn-grid">
            <i className="fas fa-th-list"></i>
          </button>
          <span>{this.props.name}</span>
        </h2>
        <div className={"section-content " + this.props.grid}>
          {this.props.product.map(card => (
            <div className="card-wrapper" key={card.id}>
              <div className="card">
                <div className="image-wrapper">
                  <img src={card.imgUrl} alt={card.location}/>
                  <i className="arrow-right"></i>
                  <i className="arrow-up"></i>
                </div>
                <div className="card-info-wrapper">
                  <div className="card-title">{card.location}</div>
                  <div className="card-description">{card.description}</div>
                  <div className="card-price-info-wrapper">
                    <CardPriceInfo icon="fas fa-user" price={card.priceOne} currency={card.currency} />
                    <CardPriceInfo icon="fas fa-users" price={card.priceTwo} currency={card.currency} />
                    <CardPriceInfo icon="fas fa-user-plus" price={card.priceThree} currency={card.currency} />
                  </div>
                </div>
                <button className="btn-book-now">book now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;