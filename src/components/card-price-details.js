import React, { Component } from 'react';

class CardPriceDetails extends Component {
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

export default CardPriceDetails;