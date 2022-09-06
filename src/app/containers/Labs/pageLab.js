import React from "react";
import Card from "../../components/Card";
import list from "./data";

import "./labsStyle.scss";

const LabPage = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default LabPage;
