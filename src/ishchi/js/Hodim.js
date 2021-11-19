import { Avatar, Card, Col, Modal, Row } from 'antd';
import style from '../css/hodim.module.css'
import Meta from 'antd/lib/card/Meta';
import React, { Component } from 'react';
import { EditOutlined, EllipsisOutlined, } from '@ant-design/icons';
import { Button, Container } from 'react-bootstrap';
import {RiDeleteBinFill, RiMapPinFill} from 'react-icons/ri'
import {FaPhone, FaTelegramPlane} from 'react-icons/fa'
import { Image } from 'antd';
import img from '../img/men.jpg' 
export default class Hodim extends Component {
    constructor() {
        super();
        this.state = {date:true}

}


   showModal = () => {
        this.setState({data:true});
          };
        
     handleOk = () => {
          this.setState({data:false});
          };
        
   handleCancel = () => {
          this.setState({data:false});
          };

    render(){
        return (
            <div>  <Button variant="primary" style={{margin:'20px'}}>Hodim yaratish</Button>
                 <h2 style={{ margin: "auto", textAlign: "center", padding: "20px" }}>
        Xodimlar
          </h2>
               <Container>
                   <Row>
                       <Col>
                        <Card
  
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <RiDeleteBinFill key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" onClick={this.showModal} />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Ergashaliyev Abbos"
      description="Boshqaruvchi"
    />
  </Card></Col>
                   </Row>
               </Container>  
      <Modal title="Hodim haqida toliq ma'lumot" width="100%"  visible={this.state.data} onOk={this.handleOk} onCancel={this.handleCancel}>
       
          <Row width='100%'>
            <Col xxl={6} lg={12} xl={6} sm={12} >
            <div className={style.card1}>
              <div className={style.icons1}><RiMapPinFill/></div>
              <div className={style.address}>Manzil:Namangan viloyati Chust tumani mustaqillik kocha 10-uy</div>
            </div>
            </Col>  
            <Col xxl={6} lg={12} xl={6} sm={12}> <div className={style.card1}>
              <div className={style.icons1}><FaPhone/></div>
              <div className={style.address}>Tel:<a href='tel:+998996487223'>
                +998996487223</a></div>
            </div></Col>
            <Col xxl={6} lg={12} xl={6} sm={12}> <div className={style.card1}>
              <div className={style.icons1}><FaTelegramPlane/></div>
              <div className={style.address}>Telegramm:<a href='https://t.me/websirius11'>WebSiriyus</a></div>
            </div></Col>
            <Col xxl={6} lg={12} xl={6} sm={12}> <div className={style.card1}>
              <div className={style.icons1}><FaPhone/></div>
              <div className={style.address}>Qo`shimcha telefon:<a href='tel:+998996487223'>
                +998996487223</a></div>
            </div></Col>
            </Row>
    <Row><Col>
        <h5>Ismi: Ergashaliyev Abbos</h5><br/>
        <h5>Qo`shimcha malimot: Ergashaliyev Abbos</h5><br/>
        <h5>Oyligi:1500000 so`m</h5>
        <h5>Pasport kopiyasi:</h5> <Image style={{width:'30px',margin:'20px'}} src={img} />
      </Col>
   
     <Col > <img src={img} style={{width:'30%',margin:'20px'}} /></Col>
  </Row>
      </Modal>
            </div>
        );
    }
}

