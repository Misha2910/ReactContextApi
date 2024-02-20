import React from 'react'


const SingleProduct = ({prod , cart,setCart}) => {
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.username}</span>
        <span>Rs. {prod.price.substring(0, 3)}</span>
      </div>
      {
      cart.includes(prod)?<button className="add" onClick={() => setCart(cart.filter((cartItem)=>cartItem.id!=prod.id))}>
        Remove from cart
      </button>:
      <button className="add" onClick={() => setCart([...cart, prod])}>
        Add to cart
      </button>
      }
      
    </div>
  );
}

export default SingleProduct