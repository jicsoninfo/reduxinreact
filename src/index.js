import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import ReactDOM from 'react-dom/client';

import store from "./redux/store";
import { Provider } from "react-redux";

// ReactDOM.render(
//   <Provider store={store}>
//   <App />
//   </Provider>,
//   document.getElementById('root')
// );




//const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
     <App />
     </Provider>
  );

// After
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
