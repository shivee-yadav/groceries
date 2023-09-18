
import React, { useContext } from 'react';
import { ShopContext } from './ShopContext'; // Import useCart hook

const Product = ({ product}) => {
  const { cartItems, addToCart } = useContext(ShopContext); // Use the useCart hook to access addToCart
  const cartItemCount = cartItems[product.id];

  return (
    <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img src={product.img} alt='logo' class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"/>
          </div>
          <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
      <h3 class="mr-3 text-sm font-semibold">{product.name}</h3>
      <p class="mr-3 text-sm font-semibold">Price: {product.price}</p> 
      <p>{product.available >= 10 ? null : (<span className="bg-orange-500 rounded-xl px-1 w-auto h-6">Only {product.available} left</span>)}</p>
      <button  onClick={() => addToCart(product.id)}  disabled={cartItemCount >= product.available}  className="bg-green-400 rounded text-white w-28 h-8 mt-4">
        Add To Cart {cartItemCount > 0 && cartItemCount <= product.available && <> ({cartItemCount})</>}
      </button>
      </div>
   
    </article>
  );
};

export default Product;
