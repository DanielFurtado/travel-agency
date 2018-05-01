import React, { Component } from 'react';
import CardPrice from '../components/card-price';
import BookNowButton from '../components/book-now-button';

class Card extends Component {
  render() {
    return (
      <div className="card-wrapper" key={this.props.cardId}>
        <div className="card">
          <div className="image-wrapper">
            <i className="fas fa-search-plus"></i>
            <img className="card-image" src={this.props.cardImg} alt={this.props.cardLocation}/>
            <i className="arrow-right"></i>
            <i className="arrow-up"></i>
          </div>
          <div className="card-info-wrapper">
            <div className="card-title">{this.props.cardLocation}</div>
            <div className="card-description">{this.props.cardDescription}</div>
            <CardPrice {...this.props} />
          </div>
          <BookNowButton id={this.props.cardId} />
        </div>
      </div>
    )
  }
}

export default Card;