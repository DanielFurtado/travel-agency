import React from 'react';
import CardPrice from '../components/card-price';
import BookNowButton from '../components/book-now-button';

const Card = (props) => {
  return (
    <div className="card-wrapper" key={props.cardId}>
      <div className="card">
        <div className="image-wrapper">
          <i className="fas fa-search-plus"></i>
          <img className="card-image" src={props.cardImg} alt={props.cardLocation}/>
          <i className="arrow-right"></i>
          <i className="arrow-up"></i>
        </div>
        <div className="card-info-wrapper">
          <div className="card-title">{props.cardLocation}</div>
          <div className="card-description">{props.cardDescription}</div>
          <CardPrice {...props} />
        </div>
        <BookNowButton id={props.cardId} />
      </div>
    </div>
  )
}

export default Card;