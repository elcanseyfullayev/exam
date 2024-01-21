import React from "react";
import { Helmet } from "react-helmet";
import Products from "../../components/Products";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import "./home.scss";
import Footer from "../../layout/Footer";
import Basket from "../../components/Basket";

function Home() {
  function handleBasket() {
    document.querySelector("#basket").classList.toggle("active");
  }
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar></Navbar>
      <nav className="resnav">
        <Link to={"/"}>
          <img
            src="https://preview.colorlib.com/theme/shop/img/logo.png.webp"
            alt=""
          />
        </Link>
        <i className="fa-solid fa-bars"></i>
      </nav>
      <header>
        <img
          src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp"
          alt=""
        />
        <div className="text">
          <div className="sale">
            <h3>Flat</h3> <h1>75%Off</h1>
          </div>
          <h1>IT'S HAPPENING THIS SEASON!</h1>
          <div className="button">PURCHASE NOW</div>
        </div>
      </header>
      <section id="categories">
        <h1>Shop for Different Categories</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <div className="images">
          <div className="prod-left">
            <div className="prod-top">
              <div className="product">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/c1.jpg.webp"
                  alt=""
                />
              </div>
              <div className="product">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/c2.jpg.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="prod-bottom">
              <div className="product">
                <img
                  src="https://preview.colorlib.com/theme/shop/img/c3.jpg.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="prod-right">
            <img
              src="https://preview.colorlib.com/theme/shop/img/c4.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id="men">
        <div className="background"></div>
        <div className="container">
          <h1>New realeased Products for Men</h1>
          <p>Who are in extremely love with eco friendly system.</p>
          <div className="products">
            <div className="product">
              <img
                src="https://preview.colorlib.com/theme/shop/img/l1.jpg.webp"
                alt=""
              />
              <h5>Long Sleeve shirt</h5>
              <p>$150.00</p>
            </div>
            <div className="product">
              <img
                src="https://preview.colorlib.com/theme/shop/img/l2.jpg.webp"
                alt=""
              />
              <h5>Long Sleeve shirt</h5>
              <p>$150.00</p>
            </div>
            <div className="product">
              <img
                src="https://preview.colorlib.com/theme/shop/img/l3.jpg.webp"
                alt=""
              />
              <h5>Long Sleeve shirt</h5>
              <p>$150.00</p>
            </div>
            <div className="product">
              <img
                src="https://preview.colorlib.com/theme/shop/img/l4.jpg.webp"
                alt=""
              />
              <h5>Long Sleeve shirt</h5>
              <p>$150.00</p>
            </div>
          </div>
        </div>
      </section>
      <section id="women">
        <h1>New realeased Products for Women</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <Products></Products>
      </section>
      <section id="related">
        <h1>Related Searched Products</h1>
        <p>Who are in extremely love with eco friendly system.</p>
        <div className="products">
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r1.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r2.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r3.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r4.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r5.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r6.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r7.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r8.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r9.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r10.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r11.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
          <div className="product">
            <img
              src="https://preview.colorlib.com/theme/shop/img/r12.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Black Lace Heels</p>
              <h6>$189.00</h6>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <Basket></Basket>
      <button className="basketbtn" onClick={handleBasket}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </>
  );
}

export default Home;
