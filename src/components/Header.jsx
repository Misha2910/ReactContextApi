import React, { useContext, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { ContextOfCart } from "../context/CartContext";


const Header = () => {
 const {cart} =  useContext(ContextOfCart)
  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home Page</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
