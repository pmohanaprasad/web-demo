import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/Order/OrderSlice";
import "./cartStyle.scss";

const Cart = ({ cart, setCart, handleChange }) => {
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const navigate = useNavigate();

  const redirect = () => {
    dispatch(fetchData(price));
    navigate("/payment");
  };

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <p>{item.title}</p>
          </div>
          <div>
            <Button onClick={() => handleChange(item, 1)}>+</Button>
            <Button>{item.amount}</Button>
            <Button onClick={() => handleChange(item, -1)}>-</Button>
          </div>
          <div>
            <span>₹ {item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>₹ {price}</span>
      </div>
      <div>
        <Button color="primary" onClick={redirect} className="float-end mt-3">
          Proceed to Buy
        </Button>
      </div>
    </article>
  );
};

export default Cart;
