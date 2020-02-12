import React from 'react';
import './App.css';
import MenuItem from "./MenuItem";

function Menu(props) {




    // const a = []; 
    // for (let i = 0; i < items.length; i++){ 
    //   a.push(<MenuItem key={items[i].text} menuItem={items[i]} />); 
    // } 
    //  
    // console.log(a)

    return (

        <nav className="Menu">
            {props.items.map(el => <MenuItem key={el.text} menuItem={el} />)}
        </nav>

    );
}

export default Menu;
