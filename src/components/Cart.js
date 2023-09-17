import React, { useContext, useState } from 'react';
import { ShopContext } from './ShopContext';
import { useNavigate } from 'react-router-dom';
import { CartItem } from './CartItem';
import ProductList from './ProductList';

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  
  const navigate = useNavigate();

  const cartItemsArray = Object.keys(cartItems)
  .filter((itemId) => cartItems[itemId] > 0)
  .map((itemId) => ({
    ...products.find((product) => product.id === parseInt(itemId)),
    quantity: cartItems[itemId],
  }));

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {cartItemsArray.map((product) => (
          <CartItem key={product.id} product={product}  />
        ))}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};


export default Cart;
