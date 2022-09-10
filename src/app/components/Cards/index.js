import React from "react";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Col,
  Container,
  Row,
} from "reactstrap";
import "./cardsStyle.scss";

function Cards() {
  return (
    <Container fluid className="h-100 p-0 ">
      <Row>
        <Col className="pe-4 pt-3 pb-3 overflow-auto">
          <Row>
            <Col lg="4">
              <Card className="my-2 mx-2 flash" style={{ height: "33rem" }}>
                <CardHeader className="text-center">Omega Labs</CardHeader>
                <CardBody className="text-center">
                  <img
                    src="https://www.omegalabs.net/media.acux/c266694a-4e67-470d-95dd-5e37d454b5ca-312x"
                    alt=""
                    className="img-fluid mb-5"
                  ></img>
                  <CardText className="pt-2">
                    Omega is a well equipped testing analytical lab which
                    specializes in providing high-accurate and On-time testing
                    services to our global customers.
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/labsprofile" className="button-7">
                    Click here to know more
                  </Link>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="my-2 mx-2 flash" style={{ height: "33rem" }}>
                <CardHeader className="text-center">Qaly Pharmacy</CardHeader>
                <CardBody className="text-center">
                  <img
                    src="https://f.hubspotusercontent10.net/hub/491011/hubfs/pharmacy-background.jpg?length=2000&name=pharmacy-background.jpg"
                    alt=""
                    className="img-fluid mb-3"
                  ></img>
                  <CardText className="pt-2">
                    Pharmacy is the clinical health science that links medical
                    science with chemistry and it is charged with the discovery,
                    production, disposal, safe.
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/pharmacyprofile" className="button-7">
                    Click here to know more
                  </Link>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="my-2 mx-2 flash" style={{ height: "33rem" }}>
                <CardHeader className="text-center">
                  Shivani's Kitchen
                </CardHeader>
                <CardBody className="text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src="https://4.imimg.com/data4/FS/LT/MY-8734260/modern-hotel-kitchen-500x500.jpg"
                      alt=""
                      className="img-fluid w-75 h-auto mb-3"
                    ></img>
                  </div>
                  <CardText className="pt-2">
                    A kitchen is a room or part of a room used for cooking and
                    food preparation in a dwelling or in a commercial
                    establishment.
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/kitchenaddress" className="button-7">
                    Click here to know more
                  </Link>
                </CardFooter>
              </Card>
            </Col>

            <Col lg="6">
              <Card className="my-2 flash" style={{ height: "33rem" }}>
                <CardHeader className="text-center">Harish Agencies</CardHeader>
                <CardBody className="text-center">
                  <img
                    src="https://www.collinsdictionary.com/images/full/supermarket_406913140_1000.jpg"
                    alt=""
                    className="img-fluid w-50 h-auto mb-4"
                  ></img>
                  <CardText className="pt-2">
                    A place of business usually owned and operated by a retailer
                    but sometimes owned and operated by a manufacturer or by
                    someone other than a retailer in which merchandise is sold
                    primarily to ultimate consumers.
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/harishaddress" className="button-7">
                    Click here to know more
                  </Link>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="my-2 flash" style={{ height: "33rem" }}>
                <CardHeader className="text-center">Maha Agencies</CardHeader>
                <CardBody className="text-center">
                  <img
                    src="https://assets-global.website-files.com/5f2a93fe880654a977c51043/620fd215f344f16633f1aafc_hero_2.jpeg"
                    alt=""
                    className="img-fluid mb-4 w-50 h-auto"
                  ></img>
                  <CardText className="pt-2">
                    A large retail market that sells food and other household
                    goods and that is usually operated on a self-service basis.a
                    large retail market that sells food and other household
                    goods and that is usually operated on a self-service basis.
                    Any business or company offering an unusually wide range of
                    goods or services.
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/mahaaddress" className="button-7">
                    Click here to know more
                  </Link>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
