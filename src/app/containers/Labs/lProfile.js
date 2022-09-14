import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { fetchData } from "../../redux/Name/nameSlice";

import "./labsStyle.scss";

const LabsProfile = () => {
  const [name, setName] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirect = () => {
    dispatch(fetchData(name));
    navigate("/labs");
  };

  return (
    <Container>
      <article>
        <h2 className="mt-5 pt-5 mb-5">Profile</h2>
        <Row className="d-flex flex-column justify-content-center">
          <Row className="align-items-center justify-content-center">
            <Col sm={3}>
              <p className="primary-names text-end">Name</p>
            </Col>
            <Col sm={5}>
              <Input
                type="text"
                placeholder="Enter the Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col sm={3}>
              <p className="primary-names text-end">Gender</p>
            </Col>
            <Col sm={5}>
              <select>
                <option selected disabled>
                  --Select Gender--
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non binary">Non-Binary</option>
                <option value="prefer not to say">Prefer Not To Say</option>
              </select>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col sm={3}>
              <p className="primary-names text-end">Date-of-birth</p>
            </Col>
            <Col sm={5}>
              <Input placeholder="dd-mm-yyyy" type="date" />
            </Col>
          </Row>
        </Row>
        <Button color="success" className="float-end mt-3" onClick={redirect}>
          Update
        </Button>
      </article>
    </Container>
  );
};

export default LabsProfile;
