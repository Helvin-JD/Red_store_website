import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import productsData from "./productsData";
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="row-main">
          <div className="main-col-1">
            <h1>
              Give Your Workout <br />A New-Style !
            </h1>
            <p>
              Success isn't always about greatness. It's about consistency.
              Consistent
            </p>
            <p>hard work gain success. Greatness will come.</p>
            <button className="login-btn">Explore Now</button>
          </div>
          <div className="main-col-2">
            <img src="https://rsanimesh.github.io/images/image1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="row-small">
          <div className="col-3">
            <img
              src="https://rsanimesh.github.io/images/category-1.jpg"
              alt=""
            />
          </div>
          <div className="col-3">
            <img
              src="https://rsanimesh.github.io/images/category-2.jpg"
              alt=""
            />
          </div>
          <div className="col-3">
            <img
              src="https://rsanimesh.github.io/images/category-3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="f-products">
        <h2 className="f-title">Featured Products <hr className="medium-hr" /></h2>

        <div className="product-grid-1">
          {productsData.slice(12, 16).map((product) => (
            <div className="product-card-1" key={product.id}>
              <img src={product.image} alt={product.name} className="image" />
              <h4>{product.name}</h4>
              <br />
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <br />

      <div className="f-products">
        <h2 className="f-title">Latest Products <hr className="medium-hr" /></h2>
        <div className="product-grid-1">
          {productsData.slice(0, 8).map((product) => (
            <div className="product-card-1" key={product.id}>
              <img src={product.image} alt={product.name} className="image" />
              <h4>{product.name}</h4>
              <br />
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <br />

      <div className="main2">
        <div className="row2">
          <div className="row2-col-1">
            <img
              src="https://rsanimesh.github.io/images/exclusive.png"
              alt=""
            />
          </div>
          <div className="row2-col-2 main-col-1">
            <p>Exclusive Available on RedStore</p>
            <h2>Smart Band 4</h2>
            <p>
              The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
              AMOLED color full-touch display with adjustable brightness, so
              everything is clear as can be.
            </p>
            <button className="login-btn">Buy Now</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
