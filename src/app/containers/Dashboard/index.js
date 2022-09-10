import React from "react";
import { Container, Row, Col } from "reactstrap";
// import Visualize from "./containers/Visualize";
import Cards from "../../components/Cards";
import "./dashboardStyle.scss";

const Dashboard = () => {
  return (
    <Container fluid className="p-0">
      <Row className="d-flex justify-content-center">
        <Col className="m-4">
          <Cards />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
