import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from '../css/Tree.module.css'

export default class Tree extends Component {
  render() {
    return(
   <div>
      <Container>
      <Row>
      <Col lg={3}>
      <button className={style.btnPlus}>+</button></Col>
      <Col lg={3}><h2>334444555 <span>so'm</span></h2></Col>
      <Col><button>-</button></Col>
      </Row>
    </Container>
   </div>)
  }
}
