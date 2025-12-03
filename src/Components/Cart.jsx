import React, { useState, useEffect } from "react";
import "./Cart.css";
import Navbar from "./Navbar";

export default function Cart() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(saved);
  }, []);

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };
  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item
      )
      .filter((item) => item.qty > 0);
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };
  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };
  const total = cart.reduce((sum, item) => sum + item.price * item.qty,0);
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  style={{ textAlign: "center", padding: "2rem" }}
                >
                  Cart is Empty
                </td>
              </tr>
            )}
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="product-info">
                  <img src={item.image} alt={item.title} className="cart-img" />

                  <div>
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </td>
                <td>
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQty(item.id)}
                    >– </button>

                    <span className="qty-value">{item.qty}</span>
                    <button
                      className="qty-btn"
                      onClick={() => increaseQty(item.id)}
                    > + </button>
                  </div>
                </td>
                <td>${((item.price) * item.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-total">
          <h2>Total Price: ${total.toFixed(2)}</h2>
        </div>
      </div>
    </>
  );
}