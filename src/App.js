import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Content from './Content.js';


function App() {
  return (
    <div className="App">
      <div className="gradiant">
        <Header/>
        <Content/>
      
        <Footer/>
        </div>
    </div>
  );
}

export default App;
