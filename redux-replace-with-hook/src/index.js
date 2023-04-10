import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import productReducer from './store/reducers/products';
import ProductsProvider from './contex/product-contex'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductsProvider >
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ProductsProvider>);


// ReactDOM.render(
//   <productsProvider >
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </productsProvider>,
//   document.getElementById('root')
// );
