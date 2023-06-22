import React from 'react';
import "../styles/Product.css";
import ProductItem from '../components/ProductItem';
import Goat from "../assets/Goat.jpg";
 import Honey from "../assets/Honey.jpg";
 import Orange from "../assets/Orange.jpg";
 import Green  from "../assets/Green.jpg";
 import Nila from "../assets/Nila.jpg";
 import Charcoal from "../assets/Charcoal.jpg";

const Product = () => {
  const products = [
    {
        name:"Goat milk soap",
        image:Goat,
        price: 12.99
    },
    {
        name:"Honey soap",
        image:Honey,
        price: 12.99
    },
    {
        name:"Orange soap",
        image:Orange,
        price: 12.99
    },
    {
        name:"Cucumber soap",
        image:Green,
        price: 12.99
    },
    {
        name:"Nila soap",
        image:Nila,
        price: 12.99
    },
    {
        name:"Activated charcoal soap",
        image:Charcoal,
        price: 12.99
    },
  ];

  return (
    <div className='Product'>
    <div className="product-list">
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
          image={product.image} 
        />
      ))}
    </div>
    </div>
  );
};

export default Product;
