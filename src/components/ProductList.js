import React, { useState, useEffect } from 'react';
import { fetchProducts } from './API';
import Product from './Product';


const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(category);
      setProducts(data);
    };

    fetchData();
  }, [category]);
  

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <Product key={product.id} product={product} img={product.img} />
        ))}
    </div>
  );
};

export default ProductList;
