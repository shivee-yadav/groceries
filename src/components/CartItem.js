import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export const CartItem = ({ product }) => {
  
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
    const quantity = cartItems[product.id];
    const totalItemPrice = Number(product.price.substring(1)) * quantity;
    console.log(quantity);
    console.log(totalItemPrice);


  return (
    <div className="bg-white drop-shadow-lg flex flex-nowrap justify-center  h-20 w-1/2 mr-44">
      <img src={product.img} alt="img" className="object-cover mr-16 p-4"/>
      <div className="flex ">
        <div className="flex flex-wrap w-52 h-full">
        <p>
          <b>{product.name}</b>
        </p>
        <p> Price: {product.price}</p>
        </div>
        <div className="w-24 h-full flex flex-wrap">
        <div className="countHandler">
          <button onClick={() => removeFromCart(product.id)} className="bg-red-500 h-6 w-6 rounded"> - </button>
          <input
            value={quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
            className="w-10 text-center mx-auto justify-self-center align-self-center"
          />
          <button onClick={() => addToCart(product.id)} className="bg-green-500 h-6 w-6 rounded"> + </button>
        </div>
        <p>{product.available >= 10 ? null : (<span className="bg-orange-500 rounded-xl px-1 w-auto h-6">Only {product.available} left</span>)}</p>
      </div>
      </div>
        <p> Total Price: ${totalItemPrice.toFixed(2)}</p>
    </div>
  );
};