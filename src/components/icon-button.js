import React, { Component } from 'react';

class IconButton extends Component {
  render() {
    return (
      <button className="icon-button">
        <i className={this.props.iconClass}></i>
      </button>
    ) 
  }
}

export default IconButton;