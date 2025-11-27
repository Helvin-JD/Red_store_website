// src/Components/Products.jsx
import React from "react";
import Navbar from "./Navbar";
import "./Products.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faFilledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

// Correct import (MUST be ProductsData.js)
import products from "../Components/productsData";

export default function Products() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2>
          Products <hr className="small-hr" />
        </h2>

        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
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
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
}
