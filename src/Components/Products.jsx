import React from "react";
import "./Products.css";

// products
const products = [
  //  Watches
  {
    id: 1,
    name: "BENYAR Automatic",
    image: "https://m.media-amazon.com/images/I/814hrCDIz4L._SX679_.jpg",
    description: "Automatic Mechanical Skeleton Watch",
    price: "$299.99",
  },
  {
    id: 2,
    name: "Fossil Men’s Black Steel Watch",
    image: "https://m.media-amazon.com/images/I/61Zs5XRCVKL._SX679_.jpg",
    description: "Minimalist analog watch with steel strap",
    price: "$199.99",
  },

  // Shoes
  {
    id: 3,
    name: "Puma Neo Cat Mid 2.0",
    image: "https://m.media-amazon.com/images/I/51qZ45UxF9L._SY695_.jpg",
    description: "Unisex-Adult BMW MMS running sports shoes",
    price: "$399.99",
  },
  {
    id: 4,
    name: "Adidas Running Shoes",
    image: "https://m.media-amazon.com/images/I/61iTev1qg6L._SY695_.jpg",
    description: "Lightweight breathable mesh running shoes",
    price: "$129.99",
  },

  // T-shirts
  {
    id: 5,
    name: "Bee-Fits Oversized Tee",
    image: "https://m.media-amazon.com/images/I/51h7UxIK4uL.jpg",
    description: "Cotton dye wash oversized unisex money printed T-shirt",
    price: "$9.99",
  },
  {
    id: 6,
    name: "Puma Slim Fit T-Shirt",
    image: "https://m.media-amazon.com/images/I/51jPzRp0T9L._SX679_.jpg",
    description: "Black slim-fit T-shirt with printed graphic",
    price: "$19.99",
  },
  {
    id: 7,
    name: "HRX Active Wear Tee",
    image: "https://m.media-amazon.com/images/I/71cQ8v5n2TL._SX679_.jpg",
    description: "Training T-shirt for men with quick-dry technology",
    price: "$15.99",
  },

  // Shirts
  {
    id: 8,
    name: "THE BEAR HOUSE",
    image: "https://m.media-amazon.com/images/I/61y07FX96RL._SY879_.jpg",
    description: "Men's Checked Slim Fit Cotton Casual Shirt",
    price: "$29.99",
  },
  {
    id: 9,
    name: "Dennis Lingo Shirt",
    image: "https://m.media-amazon.com/images/I/71O84WkEJVL._SY879_.jpg",
    description: "Premium cotton slim-fit stylish checkered shirt",
    price: "$24.99",
  },

  // Joggers / Pants
  {
    id: 10,
    name: "Jockey Track Pants",
    image: "https://m.media-amazon.com/images/I/61g7NxvYZ9L._SY741_.jpg",
    description: "Soft cotton stretchable joggers for men",
    price: "$22.99",
  },
  {
    id: 11,
    name: "Adidas Slim Fit Joggers",
    image: "https://m.media-amazon.com/images/I/61mvMRGsiDL._SY741_.jpg",
    description: "Comfortable lightweight polyester joggers",
    price: "$39.99",
  },

  // Socks
  {
    id: 12,
    name: "HRX Men’s Ankle Socks",
    image: "https://m.media-amazon.com/images/I/71NLdXePpnL._SX679_.jpg",
    description: "Pack of 3 cotton rich black/white/grey socks",
    price: "$6.99",
  },

  // Smart Watches
  {
    id: 13,
    name: "Fire-Boltt Smartwatch",
    image: "https://m.media-amazon.com/images/I/71lL2Z9GZ2L._SX679_.jpg",
    description: "Bluetooth calling smartwatch with HD display",
    price: "$49.99",
  },
  {
    id: 14,
    name: "Noise ColorFit Pro 4",
    image: "https://m.media-amazon.com/images/I/61c6+FDRWKL._SX679_.jpg",
    description: "1.8 inch AMOLED smartwatch with health tracking",
    price: "$59.99",
  },

  // Fashion
  {
    id: 15,
    name: "Men’s Casual Sneakers",
    image: "https://m.media-amazon.com/images/I/71MEH4Y0HLL._SX679_.jpg",
    description: "High-top comfortable daily wear sneakers",
    price: "$34.99",
  },
  {
    id: 16,
    name: "Men’s Sport Shoes",
    image: "https://m.media-amazon.com/images/I/61efnq4ZPEL._SX679_.jpg",
    description: "Breathable lightweight running shoes",
    price: "$44.99",
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
