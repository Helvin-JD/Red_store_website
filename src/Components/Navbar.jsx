import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://rsanimesh.github.io/images/logo.png" alt="logo" />
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "bar rotate1" : "bar"}></span>
        <span className={open ? "bar hide" : "bar"}></span>
        <span className={open ? "bar rotate2" : "bar"}></span>
      </div>
      <div></div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Product" onClick={() => setOpen(false)}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setOpen(false)}>
            <FontAwesomeIcon
              icon={faBagShopping}
              style={{ color: "#000000" }}
            />
          </Link>
        </li>
        <button className="login-btn">Login</button>
      </ul>
    </nav>
  );
}