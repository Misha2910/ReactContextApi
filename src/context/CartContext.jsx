import { createContext, useState } from "react";
export const ContextOfCart = createContext();

const CartContext = ({children}) => {
    const [cart , setCart] = useState([])
  return (
    <ContextOfCart.Provider value={{cart , setCart}}>{children}</ContextOfCart.Provider>
  )
}

export default CartContext