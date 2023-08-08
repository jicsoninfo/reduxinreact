import React, { Component } from 'react';
import Header from "./containers/Header";
//import ProductListing from "./containers/ProductListing";
 import Product from "./containers/Product";
// import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Route } from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           <h1>Hello</h1> 
          <Header /> 
          <Product/>
          {/* <BrowserRouter>
          <Routes>                  
            <Route path="/"  element={<Product/>} />
          </Routes>
          </BrowserRouter>  */}
        </div>
     </div>
    );
    }
}

export default App;
