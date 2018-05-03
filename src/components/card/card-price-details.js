import React from 'react';

const CardPriceDetails = (props) => {
  let className = "card-price-info";
  if(props.price === null){
    className = "card-price-info hidden"
  }
  return (
    <div className={className}>
      <i className={props.icon}></i>
      <span className="card-price-text">{props.price}{props.currency}</span>
    </div>  
  );
}

export default CardPriceDetails;