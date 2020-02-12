import React from 'react';
import './App.css';

function Content() {



    const clickButtonHandler = (value) => {
        console.log('Clicked!' + value)
    };

    // function clickButtonHandler() {
    //     console.log('Clicked!')
    // }
    const inputHandler = (e) => {
        console.log(e.target.value)
    };
  return (
    <div className="Content">
      <h1>Content</h1>
        <input type="text" onChange={inputHandler} />

        <button onClick={() => clickButtonHandler}>Add one</button>
        <button onClick={() => clickButtonHandler}>Add two</button>

    </div>
  );
}

export default Content;
