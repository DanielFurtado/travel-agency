import React, { Component } from 'react';
import CardPriceDetails from './card-price-details';

class CardPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceInfo: [
        {id: "priceOne", class: "fas fa-user", price: this.props.cardPriceOne, currency: this.props.cardCurrency},
        {id: "priceTwo", class: "fas fa-users", price: this.props.cardPriceTwo, currency: this.props.cardCurrency},
        {id: "priceThree", class: "fas fa-user-plus", price: this.props.cardPriceThree, currency: this.props.cardCurrency}
      ]
    };
  }

  render() {
    let cardPrice = this.state.priceInfo.map(function(item) {
      return(
        <CardPriceDetails key={item.id} icon={item.class} price={item.price} currency={item.currency} />
      );
    });

    return (
      <div className="card-price-info-wrapper">
        {cardPrice}
      </div>
    )
  }
}

export default CardPrice;