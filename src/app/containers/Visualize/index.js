import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";

const Visualize = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const navigate = useNavigate();

  const redirect = () => navigate("/wish");

  return (
    <Container fluid className="p-0">
      <Row>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 1{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Pay via UPI</ModalHeader>
                <ModalBody className="text-center">
                  <QRCodeSVG />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={redirect}>
                    Paid
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 2{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 3{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 4{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 5{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 6{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 7{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 8{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 9{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 10{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 11{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col xs="6" sm="3" lg="2">
          <Card className="my-2 mx-2" style={{ height: "25rem" }}>
            <CardHeader className="text-center fw-bolder">
              Product 12{" "}
            </CardHeader>
            <CardBody className="text-center">
              <img
                src="https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                alt=""
                className="img-fluid"
              ></img>
              <CardText>Item-Desc</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" onClick={toggle}>
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Visualize;
