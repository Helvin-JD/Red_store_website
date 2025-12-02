import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "./productsData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ProductDetails.css";
export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState("");
  const [displayPrice, setDisplayPrice] = useState(product.price);
  const [cart, setCart] = useState([]);
  const sizePriceMap = { M: 10, L: 20, XL: 40 };
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(saved);
  }, []);
  const handleBuyNow = () => {
    alert(`Selected Size: ${selectedSize || "None"}\nPrice: $${displayPrice}`);
  };
  const addToCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exist = savedCart.find((item) => item.id === product.id);
    let updatedCart;
    if (exist) {
      updatedCart = savedCart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      updatedCart = [...savedCart, { ...product, qty: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
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
            <img src={product.image1} />
            <img src={product.image2} />
            <img src={product.image3} />
            <img src={product.image4} />
          </div>
        </div>
        <div className="details-info">
          <h1>{product.name}</h1>
          <h2>$ {displayPrice}</h2>
          <select
            className="size-select"
            onChange={(e) => {
              const size = e.target.value;
              setSelectedSize(size);
              if (sizePriceMap[size]) {
                setDisplayPrice(product.price + sizePriceMap[size]);
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
            <button onClick={addToCart} className="btn-cart">
              Add To Cart
            </button>
            <button onClick={handleBuyNow} className="btn-cart">
              Buy Now
            </button>
          </div>
          <h3 className="details-title">Product Details</h3>
          <p className="details-description">{product.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}