import { createContext, useEffect, useState } from "react";
import { product_list, product_list_description } from "../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url="http://localhost:3000"
  const [token,setToken] = useState("")

  const addToCart = (productId) => {
    if (!cartItems[productId]) {
      setCartItems((prev) => ({ ...prev, [productId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
    }
  };
  const removeFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    console.log("cart ittem = ", cartItems);
    for (const item in cartItems) {
      // if (cartItems[item.id] > 0) {
      console.log("product_list_description", product_list_description);
      console.log("item = ", item);
      let itemInfo = product_list_description.find(
        (product) => product.id == item
      );

      console.log(typeof item);

      console.log("item info = ", itemInfo);
      totalAmount += itemInfo.price * cartItems[item];
      console.log("totalAmount == ", totalAmount);
      // }
    }
    return totalAmount;
  };


  const contextValue = {
    product_list_description,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,setToken
  }
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
};
export default StoreContextProvider;
