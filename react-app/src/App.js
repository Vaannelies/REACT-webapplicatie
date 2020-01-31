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

   if(url.searchParams.get("id") === 'hoi'){
      console.log('HEYYYYYY');
    //  this.setState({url_id: url.searchParams.get("id")});
    }
    // }
};



  return (
     
    <div className="App">
    <BrowserRouter>
        <Route path="/"  />
        <Route path="/details:id"/>
    </BrowserRouter>

      
      <Header />
      <PokeDex />
      <Footer />
  
    </div>
 
  );

  
};

export default App;
