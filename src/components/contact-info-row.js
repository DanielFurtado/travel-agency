import React, { Component } from 'react';

class ContactInfoRow extends Component {
  render() {
    return (
      <div className="row">
        <div className="col icon-col">
          <i className={"fas " + this.props.icon}></i>
        </div>
        <div className="col">
          <p>{this.props.text}</p>
          {this.props.text2 ? ( 
          <p>{this.props.text2}</p>
          ) : null }
        </div>
      </div>
    )
  }
}

export default ContactInfoRow;