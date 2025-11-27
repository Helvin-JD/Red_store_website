import React from "react";
import "./Contact.css";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p className="sub-text">We will get back to you asap!</p>

        <form className="contact-form">
          <div className="input-row">
            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" placeholder="First Name" />
            </div>

            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="input-box">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-box">
            <FaPhone className="icon" />
            <input type="text" placeholder="Phone" />
          </div>

          <button className="send-btn">Send</button>
        </form>

        <p className="footer-text">You may also call us at 333-33-33</p>
      </div>
    </div>
  );
}
