import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import { ContextOfCart } from "../context/CartContext";


const CartPage = () => {
  const {cart} = useContext(ContextOfCart)
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((acc , curr)=>acc+Number(curr.price),0))
  } , [cart])
  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total : Rs. {total} </span>
      <div className="productContainer">
        {cart.map((prod) => {
          return <SingleProduct prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default CartPage;
