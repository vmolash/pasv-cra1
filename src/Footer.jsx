import React from 'react';
import './App.css';
import Logo from "./Logo";
import Menu from "./Menu";

function Footer(props) {

console.log(props.appItems, props.appFooterItems);

  return (
    <div className="Footer">
        <Logo/>
        <Menu items={props.appItems} />
        <Menu items={props.appFooterItems} />

        <p>Footer</p>
    </div>
  );
}

export default Footer;
