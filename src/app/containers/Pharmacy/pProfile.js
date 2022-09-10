import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, FormGroup, Input, Label } from "reactstrap";
import { fetchData } from "../../redux/Name/nameSlice";

const PharmacyProfile = () => {
  const [name, setName] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = () => {
    dispatch(fetchData(name));
    navigate("/pharmacy");
  };

  return (
    <Container>
      <article>
        <h2 className="mt-5 pt-5 mb-5">Profile</h2>
        <div className="d-flex flex-column justify-content-center">
          <div className="mt-2 d-flex flex-row align-items-center justify-content-center">
            <FormGroup className="d-flex flex-row align-items-center">
              {" "}
              <Label className="me-3">Name:</Label>
              <Input
                type="text"
                placeholder="Enter the Name"
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </div>
          <div className="mt-2 d-flex flex-row align-items-center justify-content-center">
            <FormGroup className="d-flex flex-row align-items-center">
              {" "}
              <Label className="me-3">Gender:</Label>
              <Input type="text" placeholder="Gender" />
            </FormGroup>
          </div>
          <div className="mt-2 d-flex flex-row align-items-center justify-content-center">
            <FormGroup className="d-flex flex-row align-items-center">
              {" "}
              <Label className="me-3">DOB:</Label>
              <Input type="text" placeholder="DD/MM/YYYY" />
            </FormGroup>
          </div>
        </div>
        <Button color="success" className="float-end mt-3" onClick={redirect}>
          Update
        </Button>
      </article>
    </Container>
  );
};

export default PharmacyProfile;
