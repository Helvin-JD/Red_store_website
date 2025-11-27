import React from "react";
import "./Contact.css";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <div className="contact-main">
    <Navbar/>
      <div className="contact-wrapper">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <br />

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
        </div>
      </div>
    </div>
  );
}
