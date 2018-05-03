import React from 'react';

const GridButton = (props) => {
  return (
    <button className="btn-grid" onClick={props.onClick}>
      <i className={props.list ? "fas fa-th-large" : "fas fa-th-list"}></i>
    </button>
  )
}

export default GridButton;