import React, { Component } from "react";
import Footer from "./Footer";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import Navbar1 from "./Navbar1";
import style from "../css/boglanish.module.css";
import { Button, Form } from "react-bootstrap";
export default class Boglanish extends Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <div className={style.Boglanish}>
          <div className={style.map}>
            <YMaps>
              <Map
                width="100%"
                height="100%"
                defaultState={{ center: [55.75, 37.57], zoom: 9 }}
              />{" "}
            </YMaps>
          </div>
          <div className={style.form}>
            <Form style={{ width: "400px" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Telefon raqamingiz:</Form.Label>
                <Form.Control type="email" placeholder="+998996487223" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Emailingiz</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Xabar matni</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary">Yuborish</Button>
            </Form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
