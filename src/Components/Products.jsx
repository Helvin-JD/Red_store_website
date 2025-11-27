import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Products.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faFilledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";
import products from "../Components/productsData";
export default function Products() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Navbar />
      <h2 className="pro-txt">Products</h2> <hr className="small-hr" />
      <br />
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="container">
        {filteredProducts.length === 0 && (
          <h3 style={{ width: "100%", textAlign: "center", color: "gray" }}>
            No Products Found
          </h3>
        )}
        {filteredProducts.map((product) => (
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
      <br />
      <Footer />
    </>
  );
}