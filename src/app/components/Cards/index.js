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

// import SidebarLayout from "../../components/SidebarLayout";

// import "./cards.scss";

function Cards() {
  return (
    <Container fluid className="h-100 p-0 ">
      <Row>
        <Col className="pe-4 pt-3 pb-3 overflow-auto">
          <Row>
            <Col lg="4">
              <Card className="my-2 mx-2" style={{ height: "30rem" }}>
                <CardHeader>OMEGA LABS </CardHeader>
                <CardBody>
                  <img
                    src="http://propertyyy.com/wp-content/uploads/2020/11/dr-lal-pathlabs-stock-research.png"
                    alt=""
                    className="img-fluid"
                  ></img>
                  <CardText>
                    Dr. Lal PathLabs, Rohini is NABL certified pathology lab in
                    India. It is also among the few Indian laboratories which
                    accredited by CAP (College of American Pathologists) and
                    Certified by ISO 9001 (International Organization of
                    Standardization).
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a href="https://www.lalpathlabs.com/" target="_blank">
                    Click here to know more
                  </a>
                  {/* <Link to="/trianglepiper" className="button-7">
                    Click here to know more
                  </Link> */}
                </CardFooter>
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
                  <CardText>
                    PharmEasy is a consumer healthcare “super app” that provides
                    consumers with on-demand, home delivered access to a wide
                    range of prescription, OTC pharmaceutical, other consumer
                    healthcare products, comprehensive diagnostic test services,
                    and teleconsultations thereby serving their healthcare
                    needs.
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a href="https://pharmeasy.in/" target="_blank">
                    Click here to know more
                  </a>
                  {/* <Link to="/durov" className="button-7">
                    Click here to know more
                  </Link> */}
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="my-2 mx-2" style={{ height: "30rem" }}>
                <CardHeader>Shivani’s KITCHEN</CardHeader>
                <CardBody>
                  <div className="d-flex justify-content-center">
                    <img
                      src="https://bizrise.s3.ap-south-1.amazonaws.com/store/img/6246745/product/sweet-boondi250gm/sweet-boondi250gm-1643366265136_1.jpg"
                      alt=""
                      className="img-fluid w-75 h-auto"
                    ></img>
                  </div>
                  <CardText>
                    Mittai Kadai is an online food ordering website with
                    delivery all over India.
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a href="https://mittaikadai.online/" target="_blank">
                    Click here to know more
                  </a>
                  {/* <Link to="/gibbs" className="button-7">
                    Click here to know more
                  </Link> */}
                </CardFooter>
              </Card>
            </Col>

            <Col lg="6">
              <Card className="my-2" style={{ height: "30rem" }}>
                <CardHeader>Harish Agencies</CardHeader>
                <CardBody>
                  <img
                    src="https://www.newsorbiter.com/wp-content/uploads/2020/07/housejoy.jpg"
                    alt=""
                    className="img-fluid"
                  ></img>
                  <CardText>
                    HouseJoy is a 100% transparent house construction company
                    using an Project Management Consultants business model.
                    Bangalore's best house construction company.
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a href="https://www.housejoy.in/" target="_blank">
                    Click here to know more
                  </a>
                  {/* <Link to="/chadha" className="button-7">
                    Click here to know more
                  </Link> */}
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="my-2" style={{ height: "30rem" }}>
                <CardHeader>Maha Agencies</CardHeader>
                <CardBody>
                  <img
                    src="https://play-lh.googleusercontent.com/Trg_jmjQMImgKAkJDuRJfObcsRj9-5tHwPgEoiPtO-jmyePC1a4TvkOp2JmQtKOy0g=w600-h300-pc0xffffff-pd"
                    alt=""
                    className="img-fluid"
                  ></img>
                  <CardText>
                    GRACE SUPERMARKET’s first retail store was commissioned in
                    Chennai in the year 1972. The augmentation took superior
                    elevation and has positioned in the modern supermarket style
                    of functioning into Organization.
                  </CardText>
                </CardBody>
                <CardFooter>
                  <a href="https://www.graceonline.in/" target="_blank">
                    Click here to know more
                  </a>
                  {/* <Link to="/trianglepiper" className="button-7">
                    Click here to know more
                  </Link> */}
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