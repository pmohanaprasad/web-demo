import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

const PharmacyPayment = () => {
  const navigate = useNavigate();

  const redirect = () => navigate("/pharmacyreview");

  return (
    <Container fluid>
      <article className="mt-5">
        <Row>
          <Col>
            <h2 className="fw-bold">Select a Payment Method</h2>
            <div className="border d-flex flex-column pt-3 pb-3 mt-5">
              <Form className="ps-2">
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>Add Debit/Credit/ATM Card</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>Net Banking</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>UPI Apps</Label>
                </FormGroup>
                <FormGroup check>
                  <Input type="checkbox" />
                  <Label check>Pay and Delivery</Label>
                </FormGroup>
              </Form>
            </div>
            <div>
              <Button
                color="warning"
                className="mt-3 float-end"
                onClick={redirect}
              >
                Continue
              </Button>
            </div>
          </Col>
        </Row>
      </article>
    </Container>
  );
};

export default PharmacyPayment;
