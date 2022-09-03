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
          {/* <Card>
            <img
              alt="Sample"
              src="https://www.omegalabs.net/media.acux/c266694a-4e67-470d-95dd-5e37d454b5ca-312x"
            />
            <CardBody>
              <CardTitle tag="h5">Omega Labs</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Omega Labs
              </CardSubtitle>
              <CardText>
                Omega is a well equipped testing analytical lab which
                specializes in providing high-accurate and On-time testing
                services to our global customers.
              </CardText>
              <Button>Click Here</Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" className="m-4">
          <Card>
            <img
              alt="Sample"
              src="https://f.hubspotusercontent10.net/hub/491011/hubfs/pharmacy-background.jpg?length=2000&name=pharmacy-background.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">Qaly Pharmacy</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Qaly Pharmacy
              </CardSubtitle>
              <CardText>
                Pharmacy is the clinical health science that links medical
                science with chemistry and it is charged with the discovery,
                production, disposal, safe.
              </CardText>
              <Button className="mt-5">Click Here</Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" className="m-4">
          <Card>
            <img
              alt="Sample"
              src="https://4.imimg.com/data4/FS/LT/MY-8734260/modern-hotel-kitchen-500x500.jpg"
            />
            <CardBody>
              <CardTitle tag="h5">Shivani's Kitchen</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                A kitchen is a room or part of a room used for cooking and food
                preparation in a dwelling or in a commercial establishment.
              </CardText>
              <Button>Click Here</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col lg="3" className="m-4">
          <Card>
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Abhinaya Agencies</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Click Here</Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" className="m-4">
          <Card>
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Maha Agencies</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card‘s content.
              </CardText>
              <Button>Click Here</Button>
            </CardBody>
          </Card> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
