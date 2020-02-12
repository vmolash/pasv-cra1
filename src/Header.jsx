import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";



function Header(props) {

  return (
    <div className="Header">
        <Logo/>
        <Menu items={props.appItems}/>
    </div>
  );
}

export default Header;
