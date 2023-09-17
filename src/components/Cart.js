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
    <div className='ml-96'>
      <div className='m-4 p-4'>
        <h1 className='font-bold text-3xl'>Your Cart Items</h1>
      </div>
      <div >
        {cartItemsArray.map((product) => (
          <div className='py-4'>
            <CartItem key={product.id} product={product} />
          </div>
        ))}
      </div>

      {totalAmount > 0 ? (
        <div className="ml-44">
          <button onClick={() => navigate("/")} className="bg-green-400 rounded text-white font-semibold w-40 h-8"> Continue Shopping </button>
          <p className='text-lg font-semibold'> Subtotal: ${totalAmount} </p>
          <button onClick={() => {checkout(); navigate('/checkout') }}
           className="bg-green-400 rounded text-white font-semibold w-20 h-8 ml-8"
            >
            Checkout
          </button>
        </div>
      ) : (
        <h1 className='text-2xl font-bold'> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};


export default Cart;
