import React, { useState, useEffect } from 'react';
import { fetchProducts } from './API';
import Product from './Product';

const ProductList = ({ category, onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(category);
      setProducts(data);
    };

    fetchData();
  }, [category]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
