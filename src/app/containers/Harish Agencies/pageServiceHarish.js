import React from "react";
import Card from "../../components/Card";
import list from "./sdata";

const HarishServicePage = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default HarishServicePage;
