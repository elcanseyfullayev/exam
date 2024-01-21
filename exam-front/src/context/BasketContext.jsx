import React, { createContext, useState } from "react";
export const BasketContext = createContext();
import useLocalStorage from "use-local-storage";

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  const addBasket = (item) => {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    }
    console.log(basket);
  };

  const removeBasket = (item) => {
      setBasket(basket.filter((x) => x._id !== item._id))
  };

  const increaseCount = (item) => {
    const index = basket.findIndex((x) => x._id === item._id);
    basket[index].count++;
    setBasket([...basket]);
  };

  const decreaseCount = (item) => {
    const index = basket.findIndex((x) => x._id === item._id);
    if (basket[index].count === 1) {
      return;
    }
    basket[index].count--;
    setBasket([...basket]);
  };

  return (
    <>
      <BasketContext.Provider
        value={{
          basket,
          addBasket,
          removeBasket,
          increaseCount,
          decreaseCount,
        }}
      >
        {children}
      </BasketContext.Provider>
    </>
  );
}

export default BasketProvider;
