import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

export const CartItem = ({ product }) => {
  
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
    const quantity = cartItems[product.id];
    const totalItemPrice = Number(product.price.substring(1)) * quantity;
   


  return (
    <div class="mx-auto mt-8 max-w-2xl md:mt-12">
      <div class="bg-white shadow">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0">
                    <img src={product.img} alt="img" class="h-24 w-24 max-w-full rounded-lg object-cover"/>
                    </div>
                    <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">{product.name}</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400"> Price: {product.price}</p>
                  </div>
                  <div class="sm:order-1">
                        <div class="mx-auto flex h-8 items-stretch text-gray-600">
                          
          <button onClick={() => removeFromCart(product.id)} className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"> - </button>
          <input
            value={quantity}
            onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
            class="flex w-full text-center items-center justify-center bg-gray-100 px-4 text-xs uppercase transition"
          />
          <button onClick={() => addToCart(product.id)} class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"> + </button>
        </div>
        <p>{product.available >= 10 ? null : (<span className="bg-orange-500 rounded-xl m-20  px-1 w-auto h-6">Only {product.available} left</span>)}</p>
      </div>
      </div>
        <p> Total Price: £{totalItemPrice.toFixed(2)}</p>
        </div>
        </li>
            </ul>
          </div>
          </div>
          </div>
    </div>
  );
};