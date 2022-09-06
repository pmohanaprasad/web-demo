import React, { useState } from "react";
import Cart from "../../components/Cart";
import Nav from "../../components/Nav";
import HarishPage from "./pageHarish";

const HarishAgencies = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Nav name={"Harish Agencies"} setShow={setShow} size={cart.length} />
      {show ? (
        <HarishPage handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default HarishAgencies;
