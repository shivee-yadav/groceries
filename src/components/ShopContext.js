import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    fetch('https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=all')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching product data:', error));
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (const product of products) {
      cart[product.id] = 0;
    }
    return cart;
  };

  useEffect(() => {
    setCartItems(getDefaultCart());
  }, [products]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    // Loop through each product in cartItems
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Find the product information by ID
        const itemInfo = products.find((product) => product.id === Number(item));
        console.log(itemInfo.price.substring(1))
        // Calculate the total for this product and add it to the totalAmount
        totalAmount += cartItems[item] * Number(itemInfo.price.substring(1));
      }
    }
  
    return totalAmount.toFixed(2);;
  };
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  console.log(cartItems);
  console.log(products);

  const contextValue = {
    cartItems,
    products,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
