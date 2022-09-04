import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Wish = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  }, [navigate]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <Row className="pt-5 mt-5">
        <Col className="pt-5 mt-5">
          <h1 className="text-center pt-5 mt-5">Thank You for Shopping</h1>
          <h2 className="text-center">Have a Nice Day !!!</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Wish;
