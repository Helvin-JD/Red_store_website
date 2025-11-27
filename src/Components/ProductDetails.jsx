// src/Components/ProductDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import products from "./ProductsData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ProductDetails.css";


export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

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
            <img src={product.image1} />
            <img src={product.image2} />
            <img src={product.image3} />
            <img src={product.image4} />
          </div>
        </div>

        <div className="details-info">
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>

          <select className="size-select">
            <option>Select Size</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>

          <div className="quantity-cart">
            <input type="number" className="qty-box" min="1" defaultValue="1" />
            <button className="btn-cart">Add To Cart</button>
          </div>

          <h3 className="details-title">Product Details</h3>

          <p className="details-description">{product.description}</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
