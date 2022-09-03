import React from "react";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavLink,
  Row,
} from "reactstrap";

import "./authenticationStyle.scss";

const Authentication = () => {
  return (
    <Container fluid className="authenticator p-0 pt-5">
      <Row className="d-flex justify-content-center mt-5">
        <Col sm="3" className="login mt-5 mb-5 rounded-3">
          <h1 className="text-center mt-5">Login</h1>
          <Form className="mt-5">
            <FormGroup>
              <Label for="exampleEmail">Contact Number</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Contact Number"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">One Time Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="OTP"
                type="password"
              />
            </FormGroup>
            <NavLink
              href="/dashboard"
              className="bg-dark text-white mt-4 mb-4 text-center"
              type="submit"
              value="Submit"
            >
              Submit
            </NavLink>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Authentication;
