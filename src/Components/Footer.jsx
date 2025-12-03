import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="F-main">
        <div className="footer">
          <div className="apps">
            <h3>Download our App</h3>
            <br />
            <p>Download App for Android and ios mobile phones</p>
            <br />
            <img
              src="https://rsanimesh.github.io/images/play-store.png"
              alt="Google Play"
            />
            <img
              src="https://rsanimesh.github.io/images/app-store.png"
              alt="App Store"
            />
          </div>
          <div className="second-col">
            <center>
              <img
                src="https://rsanimesh.github.io/images/logo.png"
                alt="logo"
              />
            </center>
            <br />
            <p>
              Our Purpose Is To Sustainably Make th Pleasure and Benefits of
              Sports Accessible to the Many.
            </p>
          </div>
          <div className="social-profile">
            <center>
              <h3>Usefull Links</h3>
              <br />
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </center>
          </div>
          <div className="social-profile">
            <center>
              <h3>Follow Us</h3>
              <br />
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </center>
          </div>
        </div>
        <div className="bottom">
          <hr /><br />
          <center>
            <p>Copytight 2020 - All Rights are reserved</p>
          </center><br />
        </div>
      </div>
    </>
  );
}