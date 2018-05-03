import React from 'react';

const ContactInfoRow = (props) => {
  return (
    <div className="row">
      <div className="col icon-col">
        <i className={"fas " + props.icon}></i>
      </div>
      <div className="col">
        <p>{props.text}</p>
        {props.text2 ? ( 
        <p>{props.text2}</p>
        ) : null }
      </div>
    </div>
  )
}

export default ContactInfoRow;