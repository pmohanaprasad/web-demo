import React from "react";
import "./navStyle.scss";

const Nav = ({ name, setShow, size }) => {
  return (
    <nav className="navt mt-2">
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          {name}
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i class="fa-solid fa-cart-shopping"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
