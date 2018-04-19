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
  constructor(props) {
    super(props);
    this.state = { 
      list: this.props.list
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      list: !prevState.list
    }));
  }

  render() {
    return (
      <div>
        <h2 className="section-title">
          <button className="btn-grid" onClick={this.handleClick}>
            <i className={this.state.list ? "fas fa-th-large" : "fas fa-th-list"}></i>
          </button>
          <span>{this.props.name}</span>
        </h2>
        <div className={this.state.list ? "section-content flex-1-col" : "section-content flex-5-cols"}>
          {this.props.product.map(card => (
            <div className="card-wrapper" key={card.id}>
              <div className="card">
                <div className="image-wrapper">
                  <i className="fas fa-search-plus"></i>
                  <img className="card-image" src={card.imgUrl} alt={card.location}/>
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