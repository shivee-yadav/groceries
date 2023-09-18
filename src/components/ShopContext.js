import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [appliedOffers, setAppliedOffers] = useState([]);
  const [discount, setDiscount] = useState(0);

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

  const applyOffers = () => {
    let totalDiscount = 0;
    let offersApplied = [];

    // Iterate through cart items to check for offers
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product.id === Number(itemId));
      const itemQuantity = cartItems[itemId];
      const itemPrice = parseFloat(itemInfo.price.substring(1));

      // Check for offers and apply discounts
      if (itemInfo.name === 'Coca-Cola' && itemQuantity >= 6) {
        const freeCokes = Math.floor(itemQuantity / 6);
        const cokeDiscount = freeCokes * itemPrice;
        totalDiscount += cokeDiscount;
        offersApplied.push(`Buy 6 cans of Coca-Cola, get ${freeCokes} free`);
      }

      if (itemInfo.name === "Croissants" && itemQuantity >= 3) {
        const freeCoffees = Math.floor(itemQuantity / 3);
        const coffeePrice = products.find((product) => product.name === "Coffee").price.substring(1);
        const crossDiscount = freeCoffees * coffeePrice;
        totalDiscount += crossDiscount;
        offersApplied.push(`Buy 3 Croissants, get ${freeCoffees} free`);
      }
    }

    setAppliedOffers(offersApplied);
    setDiscount(totalDiscount);
  };


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

        // if (item.isFree) {
        //   discount += itemPrice * itemQuantity;
        // }
      }
    }

    return {
      totalAmount: totalAmount.toFixed(2),
      discount: discount.toFixed(2),
      total: (totalAmount - discount).toFixed(2),
    };
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
    appliedOffers,
    discount,
    applyOffers,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
