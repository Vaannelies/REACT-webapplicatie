import React from 'react';
import logo from './logo.svg';
import './App.css';

import PokeDex from './PokeDex';
import Header from './Header';
import Footer from './Footer';

import { BrowserRouter } from 'react-router-dom';
import { Router, Route } from 'react-router';


function App() {

  function showDetailsURL() {
    // let id = this.props.params.id;
    // if(id == 'hoi'){
   // this.setState({isDetails: true});
   var url = new URL(window.location.href);
    console.log("Dit is: " + url.searchParams.get("id"));
    // }
}

var url = new URL(window.location.href);
console.log("Hash: " + url.hash);
  return (
     
    <div className="App">
    <BrowserRouter>
        <Route path="/"  />
        <Route path="/details:id" render={showDetailsURL()}/>
    </BrowserRouter>

      
      <Header />
      <PokeDex />
      <Footer />
  
    </div>
 
  );

  
}

export default App;
