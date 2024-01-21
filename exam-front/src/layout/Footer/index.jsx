import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <>
      <footer>
        <div className="boxes">
          <div className="container">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
          </div>
          <div className="container">
            <h1>Newsletter</h1>
            <p>Stay update with our latest</p>
            <div className="input">
              <input type="text" placeholder="Enter Email"/>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="container">
            <h1>Instragram Feed</h1>
            <div className="images">
              <img
                src="https://preview.colorlib.com/theme/shop/img/i1.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/shop/img/i2.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/shop/img/i3.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/shop/img/i4.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/shop/img/i5.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/shop/img/i6.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/shop/img/i7.jpg.webp"
                alt=""
              />
              <img
                src="https://preview.colorlib.com/theme/shop/img/i8.jpg.webp"
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <h1>Follow Us</h1>
            <p>Let us be social</p>
            <div className="social">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          Elcan
        </p>
      </footer>
    </>
  );
}

export default Footer;
