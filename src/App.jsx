import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";


const App = () => {
  return (
    <div>
      <BrowserRouter>
     
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default App;
