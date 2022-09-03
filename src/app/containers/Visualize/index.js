import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
} from "reactstrap";

const Visualize = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <Card className="my-2 mx-2" style={{ height: "30rem" }}>
            <CardHeader>PRODUCT 1 </CardHeader>
            <CardBody>
              <img
                src="http://propertyyy.com/wp-content/uploads/2020/11/dr-lal-pathlabs-stock-research.png"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-1</CardText>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Col>
        <Col lg="4">
          <Card className="my-2 mx-2" style={{ height: "30rem" }}>
            <CardHeader>Qaly Pharmacy</CardHeader>
            <CardBody>
              <img
                src="https://entrackr.com/storage/2018/03/pharmeasy-image.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>ITEM-2</CardText>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Visualize;
