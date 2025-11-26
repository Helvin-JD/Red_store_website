import React from "react";
import "./Products.css";

// products
const products = [
  {
    id: 1,
    name: "BENYAR Automatic",
    image: "https://m.media-amazon.com/images/I/814hrCDIz4L._SX679_.jpg",
    description: "Automatic Mechanical Skeleton",
    price: "$299.99",
  },
  {
    id: 2,
    name: "Puma",
    image: "https://m.media-amazon.com/images/I/51qZ45UxF9L._SY695_.jpg",
    description: "Unisex-Adult BMW MMS Neo Cat Mid 2.0",
    price: "$399.99",
  },
  {
    id: 3,
    name: "Bee-Fits",
    image: "https://m.media-amazon.com/images/I/51h7UxIK4uL.jpg",
    description:
      "Cotton Dollar Money Printed Unisex Half Sleeve Dye Wash Oversized Tshirt for Men ",
    price: "$9.99",
  },
  {
    id: 4,
    name: "THE BEAR HOUSE",
    image: "https://m.media-amazon.com/images/I/61y07FX96RL._SY879_.jpg",
    description: "Men's Checked Slim Fit Cotton Casual Shirt",
    price: "$29.99",
  },
];
export default function Products() {
  return (
    <>
      
      <div className="container">
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </>
  );
}
