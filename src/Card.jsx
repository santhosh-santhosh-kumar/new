import React from "react";
import { useState } from 'react';
function Card({ catagory,addToCart,removeCart}) {
  const [cart,setCart]=useState('Add to Cart')
   function changeCart(){
    setCart(cart=='Add to Cart'?'Remove from Cart':'Add to Cart')
    if(cart=='Remove from Cart'){
      removeCart(catagory)
    
    }else{
      addToCart(catagory)
    }

   }
  return (
    <>
      <div className="col-lg-2 mt-5">
        <div className="card">
          <div className="card-body">
          <img src={catagory.img} className="card-img-top" alt="..." />
            <h5 className="card-title">{catagory.name}</h5>
            <p className="card-text">{catagory.stock}</p>
            <p className="card-text">Price : {catagory.price}</p>
            <p className="card-text">Offer : {catagory.offer}</p>
            <p className="card-text">{catagory.deleveriy}</p>
            <button className="btn btn-primary" onClick={changeCart}>{cart}</button><br></br>
            <button className="btn btn-primary buy">buy now</button>
          </div>
        </div>
      </div>
    
    </>
  );
}
export default Card;
