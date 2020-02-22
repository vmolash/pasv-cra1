import React from 'react';
import './App.css';

function Content(props) {



let name = 'Initial';

    const clickButtonHandler = (value) => {
        props.bc(name + value);
        console.log('Clicked! ' + name)
    };

    // function clickButtonHandler() {
    //     console.log('Clicked!')
    // }
    const inputHandler = (e) => {

        name = e.target.value;
        console.log(e.target.value)
    };
  return (
    <div className="Content">
      <h1>Content</h1>
        {name}
        <input type="text" onChange={inputHandler} />

        <button onClick={() => clickButtonHandler(1)}>Add one</button>
        <button onClick={() => clickButtonHandler(2)}>Add two</button>

    </div>
  );
}

export default Content;
