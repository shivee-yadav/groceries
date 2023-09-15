import React from 'react';

const Checkout = ({ cartItems, subtotal, discount, total }) => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Discount: ${discount.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      <button>Place Order</button>
    </div>
  );
};

export default Checkout;
