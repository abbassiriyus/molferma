import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import img2 from "../img/1.jpeg";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
export default class Smol extends Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <div style={{ marginTop: "140px" }}>
          <h2 style={{ margin: "auto", textAlign: "center", padding: "20px" }}>
            Sotiladigan mollar
          </h2>
          <div style={{ margin: "30px" }}>
            <Row style={{ margin: "auto" }}>
              <Col md={6} lg={3}>
                <Card style={{ width: "18rem", margin: "10px" }}>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>Golland</Card.Title>
                    <Card.Text>
                      Kuniga 0,7 gram vazn qo`shadi. Asosan gosht maxsuloti
                      uchun boqiladi.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3}>
                <Card style={{ width: "18rem", margin: "10px" }}>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>Shvet</Card.Title>
                    <Card.Text>
                      Kuniga 0,7 gram vazn qo`shadi. Asosan gosht maxsuloti
                      uchun boqiladi.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3}>
                <Card style={{ width: "18rem", margin: "10px" }}>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>Sementar</Card.Title>
                    <Card.Text>
                      Kuniga 0,7 gram vazn qo`shadi. Asosan gosht maxsuloti
                      uchun boqiladi.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3}>
                <Card style={{ width: "18rem", margin: "10px" }}>
                  <Card.Img variant="top" src={img2} />
                  <Card.Body>
                    <Card.Title>Mahalliy</Card.Title>
                    <Card.Text>
                      Kuniga 0,7 gram vazn qo`shadi. Asosan gosht maxsuloti
                      uchun boqiladi.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
