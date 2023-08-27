import React from "react";

function Item({ item }) {
  return (
    <article>
      <h1>{item.title}</h1>
      <h4>price: {item.price}$</h4>
      <button>Add to cart</button>
    </article>
  );
}

export default Item;
