import React, { Component } from 'react';
import Section from './section';
import resizeHeader from './resize-header';
import '../css/index.css';
import fetch from 'isomorphic-fetch';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }

  componentDidMount() {
    let self = this;
    fetch("http://localhost:3000/api/products")
    .then(response => {
      if (response.status !== 200) {
        console.log("Looks like there was a problem. Status Code: " + response.status);
        return;
      }
      return response.json();
    })
    .then(data => {
        let sections = data.products.map(section => {
          return(
            <Section key={section.name} product={section.items} name={section.name} list={section.list}/>
          );
        });
      self.setState({sections: sections});
    })
    .catch(err => {
    console.log('Fetch Error :-S', err);
    });
    window.addEventListener("scroll", resizeHeader);
  }

  render() {
    return (
      <main className="container">
        {this.state.sections}
      </main>
    )
  }
}

export default Main;