import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  const[cart , setCart] = useState([])
  console.log(cart)
  return (
    <div>
      <BrowserRouter>
        <Header cart={cart}/>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
