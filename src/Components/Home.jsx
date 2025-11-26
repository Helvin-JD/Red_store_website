import React from 'react'
import Navbar from './Navbar'
import "./Home.css"

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
            <p>Success isn't always about greatness. It's about consistency. Consistent</p>
            <p>hard work gain success. Greatness will come.</p>
            <button className="login-btn">Explore Now</button>
          </div>
          <div className="main-col-2">
            <img src="https://rsanimesh.github.io/images/image1.png" alt="" />
          </div>
        </div>
      </div>
      <div className='categories'>  
          <div className='row-small'>
            <div className='col-3'><img src="https://rsanimesh.github.io/images/category-1.jpg" alt="" /></div>
            <div className='col-3'><img src="https://rsanimesh.github.io/images/category-2.jpg" alt="" /></div>
            <div className='col-3'><img src="https://rsanimesh.github.io/images/category-3.jpg" alt="" /></div>
          </div>
      </div>
      <div className='f-products'>
        <h2 className='f-title'>Featured Products</h2>
        <div>
          <h1>Image</h1>
        </div>
      </div>
    </>
  );
}