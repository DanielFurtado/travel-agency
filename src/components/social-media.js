import React, { Component } from 'react';
import IconButton from '../components/icon-button';

class SocialMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons: [
        {name: "Facebook", class: "fab fa-facebook-f"},
        {name: "Twitter", class: "fab fa-twitter"},
        {name: "Pinterest", class: "fab fa-pinterest"},
        {name: "Instagram", class: "fab fa-instagram"},
        {name: "Tumblr", class: "fab fa-tumblr"}
      ]
    };
  }

  render() {
    let socialMediaIcons = this.state.icons.map(function(item) {
      return(
        <IconButton iconClass={item.class} key={item.name} />
      );
    });

    return (
      <div>{socialMediaIcons}</div>
    )
  }
}

export default SocialMedia;