
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.stock >= 10 ? 'Available' : `Stock: ${product.stock}`}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
