"use client"
import React, { Component } from 'react';
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from './containers/ProductDetails';
 //import Product from "./containers/Product";
 import {BrowserRouter,Routes, Route} from "react-router-dom";
//import { Route } from "react-router-dom"


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header"> */}
           {/* <h1>Hello</h1>  */}
          
          {/* <Product/> */}
        
         
          <BrowserRouter>
          <Header /> 
          <Routes>                  
            <Route path="/"  element={<ProductListing/>} />
            <Route path="/product/:productId" element={<ProductDetails/>} />
            <Route>404 Not Found!</Route>
          </Routes>
          </BrowserRouter>
        </div>
    //  </div>
    );
    }
}


export default App;
