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
                    src="http://propertyyy.com/wp-content/uploads/2020/11/dr-lal-pathlabs-stock-research.png"
                    alt=""
                    className="img-fluid"
                  ></img>
                  <CardText className="pt-2">
                    Dr. Lal PathLabs, Rohini is NABL certified pathology lab in
                    India. It is also among the few Indian laboratories which
                    accredited by CAP (College of American Pathologists) and
                    Certified by ISO 9001 (International Organization of
                    Standardization).
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/labs" className="button-7">
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
                    src="https://entrackr.com/storage/2018/03/pharmeasy-image.jpg"
                    alt=""
                    className="img-fluid mb-3"
                  ></img>
                  <CardText className="pt-2">
                    PharmEasy is a consumer healthcare “super app” that provides
                    consumers with on-demand, home delivered access to a wide
                    range of prescription, OTC pharmaceutical, other consumer
                    healthcare products, comprehensive diagnostic test services,
                    and teleconsultations thereby serving their healthcare
                    needs.
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/pharmacy" className="button-7">
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
                      src="https://bizrise.s3.ap-south-1.amazonaws.com/store/img/6246745/product/sweet-boondi250gm/sweet-boondi250gm-1643366265136_1.jpg"
                      alt=""
                      className="img-fluid w-75 h-auto mb-3"
                    ></img>
                  </div>
                  <CardText className="pt-2">
                    Mittai Kadai is an online food ordering website with
                    delivery all over India.
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/kitchen" className="button-7">
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
                    src="https://www.newsorbiter.com/wp-content/uploads/2020/07/housejoy.jpg"
                    alt=""
                    className="img-fluid"
                  ></img>
                  <CardText className="pt-2">
                    HouseJoy is a 100% transparent house construction company
                    using an Project Management Consultants business model.
                    Bangalore's best house construction company.
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/harishagencies" className="button-7">
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
                    src="https://www.graceonline.in/assets/img/top-lo.png"
                    alt=""
                    className="img-fluid mb-4"
                  ></img>
                  <CardText className="pt-2">
                    GRACE SUPERMARKET’s first retail store was commissioned in
                    Chennai in the year 1972. The augmentation took superior
                    elevation and has positioned in the modern supermarket style
                    of functioning into Organization.
                  </CardText>
                </CardBody>
                <CardFooter className="text-center">
                  <Link to="/mahaagencies" className="button-7">
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
