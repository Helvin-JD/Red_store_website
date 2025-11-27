import React from "react";
import Navbar from "./Navbar";
import "./Products.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faFilledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";


// products
const products = [
  //  Watches
  {
    id: 1,
    name: "BENYAR",
    image: "https://m.media-amazon.com/images/I/814hrCDIz4L._SX679_.jpg",
    description:
      "BENYAR Automatic Mechanical Skeleton Leather Strap Men's Watch",
    price: "$299.99",

  },
  {
    id: 2,
    name: "Veirdo",
    image: "https://m.media-amazon.com/images/I/616xMq9zXJL._SY741_.jpg",
    description:
      "Pure Cotton Men's Graphic Print Oversized Fit Half Sleeve Round Neck",
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
    image: "https://m.media-amazon.com/images/I/71NPlnbjxeL._SX695_.jpg",
    description:
      "Men Agora 1.0 Multisport Lightweight breathable mesh running shoes",
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
    image: "https://m.media-amazon.com/images/I/61VbsN6cjJL._SX679_.jpg",
    description: "Blue slim-fit T-shirt with printed graphic",
    price: "$19.99",
  },
  {
    id: 7,
    name: "Boldfit Gym Bag",
    image: "https://m.media-amazon.com/images/I/71+aDeSfS5L._SX679_.jpg",
    description:"Men & Women Organized Duffle Bag with Adjustable Strap",
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
    image: "https://m.media-amazon.com/images/I/71NCBXev2YL._SY879_.jpg",
    description:
      "Premium cotton slim-fit Premium Men's Casual Shirt Regular Fit",
    price: "$24.99",
  },

  // Joggers / Pants
  {
    id: 10,
    name: "Jockey Track Pants",
    image: "https://m.media-amazon.com/images/I/71vUWVMOSBL._SX466_.jpg",
    description: "Soft cotton stretchable joggers for men",
    price: "$22.99",
  },
  {
    id: 11,
    name: "Hexagon Laptop Bag",
    image:
      "https://m.media-amazon.com/images/I/313wG+n2AbL._SY300_SX300_QL70_FMwebp_.jpg",
    description:
      "Laptop Bag With 15.6” Laptop Sleeve, Shoe Compartment & USB Charging ",
    price: "$39.99",
  },

  // Socks
  {
    id: 12,
    name: "HRX Men’s Ankle Socks",
    image: "https://m.media-amazon.com/images/I/812QkIIFUaL._SX679_.jpg",
    description: "Pack of 3 cotton rich black/white/grey socks",
    price: "$6.99",
  },

  // Smart Watches
  {
    id: 13,
    name: "Atowak Automatic",
    image: "https://m.media-amazon.com/images/I/71COV3ihJAL._SX679_.jpg",
    description:"Men Cobra Steel Silver Automatic Watch & Carbon Fiber Patches Dial",
    price: "$49.99",
  },
  {
    id: 14,
    name: "Stuhrling Original",
    image: "https://m.media-amazon.com/images/I/818L0-9YYLL._SX679_.jpg",
    description: "Skeleton Automatic Watch for Men & Mechanical Watch Movement",
    price: "$1999.99",
  },

  // Fashion
  {
    id: 15,
    name: "The Souled Store Store",
    image: "https://m.media-amazon.com/images/I/51cdyJYlVDL._SY695_.jpg",
    description:
      "The Souled Store Naruto Shippuden: Sasuke Men Purple High Top Sneakers",
    price: "$34.99",
  },
  {
    id: 16,
    name: "U.S. POLO ASSN",
    image: "https://m.media-amazon.com/images/I/71TCP-Tq2VL._SY695_.jpg",
    description: "USPA|Stefan| Stylish Casual Sneaker Shoes for Man",
    price: "$44.99",
  },
];
export default function Products() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h2>
          Products <hr class="small-hr" />
        </h2>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <ul className="icons">
              <li>
                <FontAwesomeIcon icon={faFilledStar} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFilledStar} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFilledStar} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFilledStar} />
              </li>
              <li>
                <FontAwesomeIcon icon={faEmptyStar} />
              </li>
            </ul>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
