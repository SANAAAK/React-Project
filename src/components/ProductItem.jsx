import React from 'react';
import { useState } from 'react';

const ProductItem = ({ name, price, image,onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      </div>
  )
}

export default ProductItem;
