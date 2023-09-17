import React, { useState, useEffect } from 'react';
import { fetchProducts } from './API';
import Product from './Product';

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(category);
      setProducts(data);
    };

    fetchData();
  }, [category]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If it's already in the cart, increase the quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If it's not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} img={product.img} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
