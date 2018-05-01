import React, {Component} from 'react';

class GridButton extends Component {
  render() {
    return (
      <button className="btn-grid" onClick={this.props.onClick}>
        <i className={this.props.list ? "fas fa-th-large" : "fas fa-th-list"}></i>
      </button>
    )
  }
}

export default GridButton;