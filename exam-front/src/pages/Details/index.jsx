import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  fetch(`http://localhost:4200/${id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <section id="details">
        <div className="product">
          <img src={product.img} alt="" />
          <h1>{product.title}</h1>
          <h3>${product.price}</h3>
        </div>
      </section>
    </>
  );
}

export default Details;
