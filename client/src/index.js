import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductsStore from "./store/ProductsStore";
import basketProductStore from './store/basketStore';


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Context.Provider value={{
    productsStore: new ProductsStore(),
    basketProductStore: new basketProductStore(),
  }}>
    <App />
  </Context.Provider>
);
