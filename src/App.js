import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from './components/API';
import {Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';

function App() {
  const [category, setCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
 
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

 
  

  return (
   
    <div className="bg-offwhite">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList category="all" onAddToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  
  );
}

export default App;
