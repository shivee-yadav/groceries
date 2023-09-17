
import React, { useContext } from 'react';
import { ShopContext } from './ShopContext'; // Import useCart hook

const Product = ({ product}) => {
  const { cartItems, addToCart } = useContext(ShopContext); // Use the useCart hook to access addToCart
  const cartItemCount = cartItems[product.id];

  return (
    <div className="flex flex-nowrap bg-white drop-shadow-lg w-1/4 h-48 m-4 p-4 rounded-lg">
      <img src={product.img} alt='logo' className='object-contain w-1/2 h-44 rounded'/>
      <div className='pl-4 mt-4'>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p> 
      <p>{product.available >= 10 ? null : (<span className="bg-orange-500 rounded-xl px-1 w-auto h-6">Only {product.available} left</span>)}</p>
      <button  onClick={() => addToCart(product.id)}  disabled={cartItemCount >= product.available}  className="bg-green-400 rounded text-white w-28 h-8 mt-4">
        Add To Cart {cartItemCount > 0 && cartItemCount <= product.available && <> ({cartItemCount})</>}
      </button>
      </div>
    </div>
  );
};

export default Product;
