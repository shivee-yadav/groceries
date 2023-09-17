
import React, { useContext } from 'react';
import { ShopContext } from './ShopContext'; // Import useCart hook

const Product = ({ product}) => {
  const { cartItems, addToCart } = useContext(ShopContext); // Use the useCart hook to access addToCart
  const cartItemCount = cartItems[product.id];

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <img src={product.img} alt='logo'/>
      <p>Price: ${product.price}</p>
      <p>{product.available >= 10 ? 'Available' : `Only ${product.available} left`}</p>
      <button className="addToCartBttn" onClick={() => addToCart(product.id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export default Product;
