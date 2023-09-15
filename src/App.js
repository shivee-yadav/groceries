import './App.css';
import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = 0; // Implement discount logic here
  const total = subtotal - discount;

  return (
   
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList category="all" onAddToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} subtotal={subtotal} discount={discount} total={total} />} />
      </Routes>
    </div>
  
  );
}

export default App;
