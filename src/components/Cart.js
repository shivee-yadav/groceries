import React, { useContext, useEffect } from 'react';
import { ShopContext } from './ShopContext';
import { useNavigate } from 'react-router-dom';
import { CartItem } from './CartItem';


const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, products , appliedOffers, applyOffers } = useContext(ShopContext);
  const { totalAmount, discount, total } = getTotalCartAmount();
  const navigate = useNavigate();

  useEffect(() => {
    applyOffers(); // Apply offers when cart items change
  }, [cartItems]);

  const cartItemsArray = Object.keys(cartItems)
    .filter((itemId) => cartItems[itemId] > 0)
    .map((itemId) => ({
      ...products.find((product) => product.id === parseInt(itemId)),
      quantity: cartItems[itemId],
    }));

  return (
    <section class="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center">
          <h1 class="text-2xl font-semibold text-gray-900">Your Cart</h1>
        </div>
        <div >
          {cartItemsArray.map((product) => (
            <div className='py-4'>
              <CartItem key={product.id} product={product} />
            </div>
          ))}
        </div>


        {totalAmount > 0 ? ( <>
          <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
              <p className='text-sm text-gray-400'> Subtotal:</p>
              <p class="text-lg font-semibold text-gray-900">£{totalAmount}</p>
              </div>
              <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Discount:</p>
              <p class="text-lg font-semibold text-gray-900">£{discount}</p>
            </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400"></span>£{total}</p>
          </div>
          <div class="mt-6 text-center">
              <button onClick={() => { checkout(); navigate('/checkout') }}
                className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                Checkout
              </button>
            </div>
            </>
        ) : (<>
          <h1 className='text-2xl font-bold'> Your Shopping Cart is Empty</h1>
          <button onClick={() => navigate("/")} className="bg-green-400 rounded text-white font-semibold w-40 h-8"> Continue Shopping </button>
          </>)}

          {appliedOffers.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Applied Offers:</h2>
          <ul>
            {appliedOffers.map((offer, index) => (
              <li key={index}>{offer}</li>
            ))}
          </ul>
        </div>
      )}

      {discount > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Total Discount:</h2>
          <p>${discount}</p>
        </div>
      )}
      </div>

    </section>
  );
};


export default Cart;
