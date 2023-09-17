import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export const CartItem = ({ product }) => {
  
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
    // console.log(cartItems);

  return (
    <div className="cartItem">
      
      <div className="description">
        <p>
          <b>{product.name}</b>
        </p>
        <p> Price: ${product.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(product.id)}> - </button>
          <input
            value={cartItems[product.id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
          />
          <button onClick={() => addToCart(product.id)}> + </button>
        </div>
      </div>
    </div>
  );
};