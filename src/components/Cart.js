import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => onRemoveFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
