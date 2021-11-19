import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../css/BoshSahifa.css";
import img2 from "../img/2.jpeg";
import img1 from "../img/1.jpeg";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
export default class BoshSahifa extends Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <header class="header" style={{ marginTop: "100px" }}>
          <div class="brand-box">
            <span class="brand">Biz har jabahada ilg`olroqmiz</span>
          </div>

          <div class="text-box">
            <h1 class="heading-primary">
              <span class="heading-primary-main">Farhod Madad MCHJ</span>
              <span class="heading-primary-sub">Xususiy mol firmasi</span>
            </h1>
            <a href="#mol" class="btn btn-white btn-animated">
              Asosiy menyu
            </a>
          </div>
        </header>{" "}
        <div id="mol">
          <h2 style={{ margin: "auto", textAlign: "center", padding: "20px" }}>
            Yangi Zotlari
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

          <h2 style={{ margin: "auto", textAlign: "center", padding: "20px" }}>
            Foto lavhalar
          </h2>
          <div class="carusel1" style={{ overflow: "hidden" }}>
            <div class="container">
              <div class="carousel">
                <div class="carousel__face">
                  <span style={{ color: "white" }}>1-sentabr 2001-yil</span>
                </div>
                <div class="carousel__face">
                  <span style={{ color: "white" }}>10-avgust 2014-yil</span>
                </div>
                <div class="carousel__face">
                  <span style={{ color: "white" }}>12-may 2015-yil</span>
                </div>
                <div class="carousel__face">
                  <span style={{ color: "white" }}>21-mart 2017-yil</span>
                </div>
                <div class="carousel__face">
                  <span style={{ color: "white" }}>1-yanvar 2018-yil </span>
                </div>
                <div class="carousel__face">
                  <span style={{ color: "white" }}>8-mart 2018-yil</span>
                </div>
                <div class="carousel__face">
                  <span style={{ color: "white" }}>1-sentabr 2019-yil</span>
                </div>
                <div class="carousel__face">
                  <span style={{ color: "white" }}>yangi yil 2020-yil</span>
                </div>
                <div class="carousel__face">
                  <span style={{ color: "white" }}>25-may 2021-yil</span>
                </div>
              </div>
            </div>
          </div>
          <h2 style={{ margin: "auto", textAlign: "center", padding: "20px" }}>
            Yangiliklar
          </h2>
          <div class="cardlar">
            <Container>
              <Row>
                <Col xxl={6}>
                  <div class="card1">
                    <img src={img1} />
                    <div>
                      {" "}
                      <h2>Maqola</h2>
                      <p>
                        publitsistik janr. Maqolada ijtimoiy hayot hodisalari
                        chuqur tahlil qilinib, nazariy va ommaviy jihatdan
                        umumlashtiriladi, davlat siyosati, iqtisodiyot, texnika,
                        fan va madaniyatda erishilgan yutuqlar, ilgʻor ish
                        tajribalari ommalashtiriladi, xalq xoʻjaligidagi
                        nuqsonlar tanqid qilinadi. Matbuotda bosh Maqola,
                        nazariy va targʻibot Maqola, muammoli Maqola keng
                        qoʻllanadi.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xxl={6}>
                  <div class="card1">
                    <img src={img1} />
                    <div>
                      {" "}
                      <h2>Maqola</h2>
                      <p>
                        publitsistik janr. Maqolada ijtimoiy hayot hodisalari
                        chuqur tahlil qilinib, nazariy va ommaviy jihatdan
                        umumlashtiriladi, davlat siyosati, iqtisodiyot, texnika,
                        fan va madaniyatda erishilgan yutuqlar, ilgʻor ish
                        tajribalari ommalashtiriladi, xalq xoʻjaligidagi
                        nuqsonlar tanqid qilinadi. Matbuotda bosh Maqola,
                        nazariy va targʻibot Maqola, muammoli Maqola keng
                        qoʻllanadi.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xxl={6}>
                  <div class="card1">
                    <img src={img1} />
                    <div>
                      {" "}
                      <h2>Maqola</h2>
                      <p>
                        publitsistik janr. Maqolada ijtimoiy hayot hodisalari
                        chuqur tahlil qilinib, nazariy va ommaviy jihatdan
                        umumlashtiriladi, davlat siyosati, iqtisodiyot, texnika,
                        fan va madaniyatda erishilgan yutuqlar, ilgʻor ish
                        tajribalari ommalashtiriladi, xalq xoʻjaligidagi
                        nuqsonlar tanqid qilinadi. Matbuotda bosh Maqola,
                        nazariy va targʻibot Maqola, muammoli Maqola keng
                        qoʻllanadi.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xxl={6}>
                  <div class="card1">
                    <img src={img1} />
                    <div>
                      <h2>Maqola</h2>
                      <p>
                        publitsistik janr. Maqolada ijtimoiy hayot hodisalari
                        chuqur tahlil qilinib, nazariy va ommaviy jihatdan
                        umumlashtiriladi, davlat siyosati, iqtisodiyot, texnika,
                        fan va madaniyatda erishilgan yutuqlar, ilgʻor ish
                        tajribalari ommalashtiriladi, xalq xoʻjaligidagi
                        nuqsonlar tanqid qilinadi. Matbuotda bosh Maqola,
                        nazariy va targʻibot Maqola, muammoli Maqola keng
                        qoʻllanadi.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
