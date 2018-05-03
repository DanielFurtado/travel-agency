import React from 'react';

const IconButton = (props) => {
  return (
    <button className="icon-button">
      <i className={props.iconClass}></i>
    </button>
  )
}

export default IconButton;