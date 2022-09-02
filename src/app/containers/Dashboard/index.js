import React from "react";
import { Col, Container, Row } from "reactstrap";
import NavBar from "../../components/NavBar";

const Dashboard = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
