import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./basket.scss";

function Basket() {
  const { basket, removeBasket, increaseCount, decreaseCount } =
    useContext(BasketContext);

  return (
    <>
      <section id="basket">
        <h1>Cart:</h1>
        <div className="basketitems">
          {basket.map((basketitem) => (
            <div className="basketitem" key={basketitem._id}>
              <img src={basketitem.img} alt="" />
              <div className="about">
                <h1>{basketitem.title}</h1>
                <p>${basketitem.price}</p>
              </div>

              <div className="count">
                <button onClick={() => decreaseCount(basketitem)}>-</button>
                <p>{basketitem.count}</p>
                <button onClick={() => increaseCount(basketitem)}>+</button>
              </div>
              <button className="removebtn" onClick={() => removeBasket(basketitem)}><i className="fa-solid fa-trash"></i></button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Basket;
