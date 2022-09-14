import { QRCodeSVG } from "qrcode.react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { getAllOrder } from "../../redux/Order/OrderSlice";
import { getAllAddress } from "../../redux/Address/addressSlice";

const KitchenReview = () => {
  const data = useSelector(getAllOrder);
  const address = useSelector(getAllAddress);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const navigate = useNavigate();

  const redirect = () => navigate("/wish");

  return (
    <Container fluid>
      <article className="mt-5">
        <Row>
          <Col>
            <h2>Review the Order</h2>
            <div className="border d-flex flex-column pt-3 pb-3 mt-5 ps-2 pe-2">
              <div className="fw-bold mb-3">Order Total: ₹ {data.order}</div>
              <div className="fw-bold mb-3">Address: {address.address}</div>
              <div className="fw-bold mb-1">Book the Slot</div>
              <div className="border-bottom mb-3"></div>
              <Form>
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>8am - 12pm</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>1pm - 4pm</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>5pm - 9pm</Label>
                </FormGroup>
              </Form>
            </div>
            <div>
              <Button
                color="warning"
                className="mt-3 float-end"
                onClick={toggle}
              >
                Place your Order and Pay
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
            </div>
          </Col>
        </Row>
      </article>
    </Container>
  );
};

export default KitchenReview;
