import React, { Component } from "react";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";
import img2 from "../img/2.jpeg";
import style from "../css/Mollar.module.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Tabs } from "antd";
import "antd/dist/antd.css";
export default class Mollar extends Component {
  render() {
    const { TabPane } = Tabs;
    return (
      <div>
        <Navbar1 />
        <div className={style.mundarija}>
          {" "}
          <Container>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Sigirlar" key="1">
                <h2
                  id="sigir"
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  Sigirlar
                </h2>
                <Container>
                  <Row style={{ margin: "auto" }}>
                    <Col md={6} lg={3}>
                      <Card style={{ width: "18rem", margin: "10px" }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title>Golland</Card.Title>
                          <Card.Text>
                            Kuniga 0,7 gram vazn qo`shadi. Asosan gosht
                            maxsuloti uchun boqiladi.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} lg={3}>
                      <Card style={{ width: "18rem", margin: "10px" }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title>Golland</Card.Title>
                          <Card.Text>
                            Kuniga 0,7 gram vazn qo`shadi. Asosan gosht
                            maxsuloti uchun boqiladi.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tab="Buqalar" key="2">
                <h2
                  id="buqa"
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  Buqalar
                </h2>
                <Container>
                  <Row style={{ margin: "auto" }}>
                    <Col md={6} lg={3}>
                      <Card style={{ width: "18rem", margin: "10px" }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title>Golland</Card.Title>
                          <Card.Text>
                            Kuniga 0,7 gram vazn qo`shadi. Asosan gosht
                            maxsuloti uchun boqiladi.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} lg={3}>
                      <Card style={{ width: "18rem", margin: "10px" }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title>Golland</Card.Title>
                          <Card.Text>
                            Kuniga 0,7 gram vazn qo`shadi. Asosan gosht
                            maxsuloti uchun boqiladi.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tab="Buzoqlar" size="large" key="3">
                <h2
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  Buzoqlar
                </h2>
                <Container>
                  <Row style={{ margin: "auto" }}>
                    <Col md={6} lg={3}>
                      <Card style={{ width: "18rem", margin: "10px" }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title>Golland</Card.Title>
                          <Card.Text>
                            Kuniga 0,7 gram vazn qo`shadi. Asosan gosht
                            maxsuloti uchun boqiladi.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} lg={3}>
                      <Card style={{ width: "18rem", margin: "10px" }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title>Golland</Card.Title>
                          <Card.Text>
                            Kuniga 0,7 gram vazn qo`shadi. Asosan gosht
                            maxsuloti uchun boqiladi.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
              <TabPane tab="Boshqa hayvonlar" key="4">
                <h2
                  id="boshqa"
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  Boshqa hayvonlar
                </h2>
                <Container>
                  <Row style={{ margin: "auto" }}>
                    <Col md={6} lg={3}>
                      <Card style={{ width: "18rem", margin: "10px" }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title>Golland</Card.Title>
                          <Card.Text>
                            Kuniga 0,7 gram vazn qo`shadi. Asosan gosht
                            maxsuloti uchun boqiladi.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} lg={3}>
                      <Card style={{ width: "18rem", margin: "10px" }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                          <Card.Title>Golland</Card.Title>
                          <Card.Text>
                            Kuniga 0,7 gram vazn qo`shadi. Asosan gosht
                            maxsuloti uchun boqiladi.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </TabPane>
            </Tabs>{" "}
            <Row></Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
