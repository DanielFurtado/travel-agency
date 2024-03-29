import React, { Component } from 'react';
import GridButton from './buttons/grid-button';
import Card from './card/card';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      grid: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({list: !prevState.list}));
  }

  componentDidMount() {
    window.addEventListener("load", this.updateDimensions);
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    if(window.innerWidth < 769) {
      this.setState({grid: false});
    } else {
      this.setState({grid: true});
    }
  }

  render() {
    if(this.props.product) {
      var Cards = this.props.product.map(card => (
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
      ))
    }

    return (
      <article>
        <h2 className="section-title">
          {this.state.grid ? <GridButton list={this.state.list} onClick={this.handleClick}/> : null}
          <span>{this.props.name}</span>
        </h2>
        <section className={this.state.grid && this.state.list ? "section-content list-view" : "section-content card-view"}>
          {Cards}
        </section>
      </article>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

}

export default Section;