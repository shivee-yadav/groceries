import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from './components/API';
import {Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  const [category, setCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

 


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(category);
      setFilteredProducts(data);
    };

    fetchData();
  }, [category]);

  const handleSearch = (searchQuery) => {
    // Filter products based on the search query
    const filtered = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
   
    <div className="bg-offwhite">
      <Navbar onSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<ProductList category="all" onAddToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />} />
      </Routes>
    </div>
  
  );
}

export default App;
