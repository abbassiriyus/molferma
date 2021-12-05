
import { Card } from 'antd'
import Item from 'antd/lib/list/Item'
import React, { Component } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import style from '../css/xabar.module.css'
export default class Xabar extends Component {
    render() {
        return (
            <div>
       <Container>
           <Row>
<Col sm={12} md={6} lg={3}>
<Card className={style.cards}>
  <ListGroup variant="flush">
    <ListGroup.Item>Ism: <span>Nigora</span></ListGroup.Item>
    <ListGroup.Item>Nomer: <span>+998xxxxxxxxx</span></ListGroup.Item>
    <Item>Xabar: <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p></Item>
    <span>03.12.2021</span>
    
  </ListGroup>
</Card>
</Col>
<Col sm={12} md={6} lg={3}>
<Card className={style.cards}>
  <ListGroup variant="flush">
    <ListGroup.Item>Ism: <span>Nigora</span></ListGroup.Item>
    <ListGroup.Item>Nomer: <span>+998xxxxxxxxx</span></ListGroup.Item>
    <Item>Xabar: <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p></Item>
    <span>03.12.2021</span>
    
  </ListGroup>
</Card>
</Col>
<Col sm={12} md={6} lg={3}>
<Card className={style.cards}>
  <ListGroup variant="flush">
    <ListGroup.Item>Ism: <span>Nigora</span></ListGroup.Item>
    <ListGroup.Item>Nomer: <span>+998xxxxxxxxx</span></ListGroup.Item>
    <Item>Xabar: <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p></Item>
    <span>03.12.2021</span>
    
  </ListGroup>
</Card>
</Col>
<Col sm={12} md={6} lg={3}>
<Card className={style.cards}>
  <ListGroup variant="flush">
    <ListGroup.Item>Ism: <span>Nigora</span></ListGroup.Item>
    <ListGroup.Item>Nomer: <span>+998xxxxxxxxx</span></ListGroup.Item>
    <Item>Xabar: <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p></Item>
    <span>03.12.2021</span>
    
  </ListGroup>
</Card>
</Col>

           </Row>
       </Container>
            </div>
        )
    }
}
