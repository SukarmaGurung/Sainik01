import { createContext, useEffect, useState } from "react";
import axios from 'axios'



export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url="http://localhost:3000"
  const [token,setToken] = useState("");
  const [product_list_description,setProductListDescription] = useState([])
 

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
  console.log('Cart Items:', cartItems);
  console.log('Product List:', product_list_description);
  
  
  const getTotalCartAmount = () => {
    let totalAmount= 0;
    
    for (const item in cartItems) {
       if (cartItems[item] > 0) {
      let itemInfo = product_list_description.find((product) => product._id === (item)
      );
      if (itemInfo) {
      totalAmount += itemInfo.price * cartItems[item];
      }
    
      
      
     
       }
    }
  
    return totalAmount;
  }
  

  const fetchProductList = async () =>{
    const response = await axios.get(url+"/api/product/list");
    setProductListDescription(response.data.data)
  }
  useEffect(()=>{
    
    async function loadData(){
      await fetchProductList();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
      }
    }
    loadData();
  },[])
  


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
