import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const items = [
    {
        text: 'Home',
        link: 'home-page'
    },

    {
        text: 'Products',
        link: 'goods-page'
    },
    {
        text: 'Service',
        link: 'serv-page'
    },
    {
        text: 'Contact',
        link: 'cont-page'
    }
];

const items2 = [
    {
        text: 'FAQ',
        link: 'faq-page'
    },

    {
        text: 'Education',
        link: 'edu-page'
    },
    {
        text: 'Events',
        link: 'event-page'
    },
    {
        text: 'Privacy',
        link: 'privacy-page'
    }
];
function App() {

  return (
    <div className="App">
      <Header appItems={items} />
      <Content/>
      <Footer appItems={items} appFooterItems={items2}/>
    </div>
  );
}

export default App;
