import React, {Component} from 'react';

class BookNowButton extends Component {
  render() {
    return (
      <button className="btn-book-now" id={this.props.id}>book now</button>
    )
  }
}

export default BookNowButton;