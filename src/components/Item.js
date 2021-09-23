import React, { useState } from "react";

function Item({ name, category }) {

  const [InCart, setInCart] = useState(false)

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setInCart(!InCart)}>{InCart? <li className="in-cart"/> && 'Remove from Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
