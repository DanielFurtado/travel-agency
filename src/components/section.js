import React, { Component } from 'react';
import GridButton from '../components/grid-button';
import Card from '../components/card';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {list: this.props.list}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({list: !prevState.list}));
  }

  render() {   
    return (
      <article>
        <h2 className="section-title">
          <GridButton list={this.state.list} onClick={this.handleClick}/>
          <span>{this.props.name}</span>
        </h2>
        <section className={this.state.list ? "section-content flex-1-col" : "section-content flex-5-cols"}>
          {this.props.product.map(card => (
            <Card 
              key={card.id} 
              cardId={card.id}
              cardImg={card.imgUrl}
              cardLocation={card.location}
              cardDescription={card.description}
              cardCurrency={card.currency}
              cardPriceOne={card.priceOne}
              cardPriceTwo={card.priceTwo}
              cardPriceThree={card.priceThree}
            /> 
          ))}
        </section>
      </article>
    );
  }
}

export default Section;