import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

const Category = () => {
  const navigate = useNavigate();

  const menu = () => {
    navigate("/harishagencies");
  };

  const service = () => {
    navigate("/haservice");
  };

  return (
    <Container>
      <article className="mt-5 pt-5">
        <h2>Harish Agencies - Select Category</h2>
        <Row className="d-flex justify-content-center">
          <Col xs="3" className="mt-5 pt-5 d-flex justify-content-center">
            <Button onClick={menu}>Menu</Button>{" "}
          </Col>
          <Col xs="3" className="mt-5 pt-5 d-flex justify-content-center">
            <Button onClick={service}>Services</Button>
          </Col>
        </Row>
      </article>
    </Container>
  );
};

export default Category;
