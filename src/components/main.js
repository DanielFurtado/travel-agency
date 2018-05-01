import React, { Component } from 'react';
import Section from '../components/section';
import resizeHeader from '../components/resize-header';
import WindowWidth from '../components/window-width';
import '../css/index.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }

  componentDidMount() {
    let self = this;
    fetch("/api/products")
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
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });
    window.addEventListener("scroll", resizeHeader);
  }

  render() {
    return (
      <main className="container">
        {this.state.sections}
        <WindowWidth />
      </main>
    )
  }
}

export default Main;