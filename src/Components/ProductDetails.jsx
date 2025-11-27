// src/Components/ProductDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import products from "./ProductsData";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

      <div className="details-container">
        <img src={product.image} alt={product.name} className="details-img" />

        <div className="details-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>{product.price}</h2>

          <button className="btn-buy">Buy Now</button>
          <button className="btn-cart">Add to Cart</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
