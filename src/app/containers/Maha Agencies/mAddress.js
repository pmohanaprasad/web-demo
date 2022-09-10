import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Input } from "reactstrap";
import { fetchData } from "../../redux/Address/addressSlice";

const MahaAddress = () => {
  const dispatch = useDispatch();

  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const redirect = () => {
    dispatch(fetchData(address));
    navigate("/mahaagencies");
  };

  return (
    <Container>
      <article>
        <h2 className="mt-5 pt-5">Enter the Address:</h2>
        <div className="mt-5">
          <Input
            type="text"
            placeholder="Enter the Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <Button color="success" className="mt-5 float-end" onClick={redirect}>
          Add
        </Button>
      </article>
    </Container>
  );
};

export default MahaAddress;
