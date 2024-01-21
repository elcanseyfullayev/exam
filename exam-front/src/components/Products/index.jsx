import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";
import "./products.scss";

function Products() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("default");
  const { addBasket } = useContext(BasketContext);

  async function getFetch() {
    await fetch("http://localhost:4200/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    getFetch();
  }, []);

  const sortedProducts = [...products];

  if (sort === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "title-asc") {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "title-desc") {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <>
      <section id="products">
        <div className="selection">
          <select onChange={(e) => setSort(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-asc">Price(Low-High)</option>
            <option value="price-desc">Price(High-Low)</option>
            <option value="title-asc">A-Z</option>
            <option value="title-desc">Z-A</option>
          </select>
        </div>
        <div className="products">
          {sortedProducts.map((product) => (
            <div className="product" key={product._id}>
              <img src={product.img} alt="" />
              <h1>{product.title}</h1>
              <p>${product.price}</p>
              <button onClick={() => addBasket(product)}><i className="fa-solid fa-cart-shopping"></i></button>
              <Link to={`/details/${product._id}`}>Details</Link>
            </div>
          ))}
        </div>
        <Link to={"/add"}>
          <button className="addbtn">Add Product</button>
        </Link>
      </section>
    </>
  );
}

export default Products;
