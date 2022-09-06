import React from "react";
import { Button } from "reactstrap";

const Card = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="cards mb-5">
      <div className="image_box text-center">
        <img src={img} alt="" />
      </div>
      <div className="details text-center">
        <p>{title}</p>
        <p>Price - {price}Rs</p>
        <Button
          onClick={() => handleClick(item)}
          style={{ backgroundColor: "#212529" }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
