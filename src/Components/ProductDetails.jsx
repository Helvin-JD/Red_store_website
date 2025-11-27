import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./ProductsData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ProductDetails.css";
export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState("");
  const [displayPrice, setDisplayPrice] = useState(product.price);
  const sizePriceMap = {
    M: 10,
    L: 20,
    XL: 40,
  };
  const handleBuyNow = () => {
    alert(`You selected size: ${selectedSize || "No size selected"}\nPrice: ${displayPrice}`);
  };
  if (!product) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "5rem" }}>
        Product Not Found
      </h2>
    );
  }
  return (
    <>
      <Navbar />
      <div className="details">
        <div className="image-section">
          <img src={product.image} className="details-img" alt="" />
          <div className="thumbnail-row">
            <img src={product.image1} alt="" />
            <img src={product.image2} alt="" />
            <img src={product.image3} alt="" />
            <img src={product.image4} alt="" />
          </div>
        </div>
        <div className="details-info">
          <h1>{product.name}</h1>
          <h2>{displayPrice}</h2>
          <select
            className="size-select"
            onChange={(e) => {
              const size = e.target.value;
              setSelectedSize(size);
              if (sizePriceMap[size] !== undefined) {
                const base = Number(product.price.replace("$", ""));
                const newPrice = base + sizePriceMap[size];
                setDisplayPrice(`$${newPrice.toFixed(2)}`);
              } else {
                setDisplayPrice(product.price);
              }
            }}
          >
            <option value="">Select Size</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <div className="quantity-cart">
            <input type="number" className="qty-box" min="1" defaultValue="1" />
            <button className="btn-cart">Add To Cart</button>
            <button className="btn-cart" onClick={handleBuyNow}>Buy Now</button>
          </div>
          <h3 className="details-title">Product Details</h3>
          <p className="details-description">{product.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
