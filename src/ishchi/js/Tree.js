 
import React,{useState, Component } from 'react'
import style from '../css/Tree.module.css'
import { Col, Container, Row, Modal,Button,Form} from "react-bootstrap";

export default function Tree() {
  const [show, setShow] = useState(false);
const [show1, setShow1] = useState(false);


  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      
       
<div className={style.card1} >
<div className={style.plus} onClick={handleShow}>+</div>
<div className={style.som}>2345..<span>so`m</span></div>
<div className={style.minus} onClick={handleShow1}>-</div>
</div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mablag` qo`shish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label column="lg">
      Qancha qo'shish kerak
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="Number" placeholder="Sum" />
    </Col>
  <br/>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label column="lg">  Nima uchun </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Mablag` ayrish</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <br/>
    <Form.Label column="lg">
      Qancha ayirish kerak
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="Number" placeholder="Sum" />
    </Col>
<br/>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label column="lg">  Nima uchun </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

<Row className={style.cards}>
     <div className={style.plusBoxs}> 
      <div className={style.plusBox}>
        <span className={style.plus}>+</span>
        <span className={style.plusSum}>summa</span>
      <p className={style.plusText}>Plus buttonga malumot kiritsak yozilishi kerak</p>
       <span className={style.plusDate}>26.11.2021</span>
      </div>
      </div>
      <div className={style.minusBoxs}>
      <div className={style.minusBox}>
        <span className={style.minus}>-</span>
        <span className={style.minusSum}>summa</span>
        <p className={style.minusText}>Minus buttonga malumot kiritsak yozilishi kerak</p>
        <span className={style.minusDate}>26.11.2021</span>
      </div>
      </div>
      <div className={style.minusBoxs}>
      <div className={style.minusBox}>
        <span className={style.minus}>-</span>
        <span className={style.minusSum}>summa</span>
        <p className={style.minusText}>Minus buttonga malumot kiritsak yozilishi kerak</p>
        <span className={style.minusDate}>26.11.2021</span>
      </div>
      </div>
    </Row>
    </div>
  )
}

