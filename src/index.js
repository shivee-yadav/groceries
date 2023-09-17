import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ShopContextProvider } from './components/ShopContext'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ShopContextProvider>
   <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopContextProvider>
  </React.StrictMode>
);


