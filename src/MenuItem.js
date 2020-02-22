import React from 'react';

import './App.css';


function MenuItem(props) {
  console.log(props);

  return (
        <a href={props.menuItem.link} className="Menu-link">{props.menuItem.text}</a>
  );
}

export default MenuItem;
