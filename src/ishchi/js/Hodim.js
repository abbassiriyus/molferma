import { Avatar, Card, Col, Input, InputNumber, Modal, Row } from 'antd';
import style from '../css/hodim.module.css';
import Meta from 'antd/lib/card/Meta';
import React, { Component } from 'react';
import { EditOutlined, EllipsisOutlined, } from '@ant-design/icons';
import { Button, Container } from 'react-bootstrap';
import {RiDeleteBinFill, RiMapPinFill} from 'react-icons/ri';
import {FaPhone, FaTelegramPlane} from 'react-icons/fa';
import { Image } from 'antd';
import img from '../img/men.jpg'; 
import Form from 'antd/lib/form/Form';

export default class Hodim extends Component {
    constructor() {
        super();
        this.state = {date:true,
        show:false}

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
    showModal1 = () => {
            this.setState({show:true});
            console.log(this.state.show)  };
            
    handleOk1 = () => {
              this.setState({show:false});
              };
            
    handleCancel1 = () => {
              this.setState({show:false});
              };
    render(){





        return (
            <div>  <Button variant="primary"  onClick={this.showModal1}  style={{margin:'20px'}}>Hodim yaratish</Button>
                 <h2 style={{ margin: "auto", textAlign: "center", padding: "20px" }}>
        Xodimlar
          </h2>
               <Container>
                   <Row>
                       <Col sm={24} md={12} lg={6}>
                        <Card className={style.cardImg}
  
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <RiDeleteBinFill key="setting" />,
      <EditOutlined key="edit"  onClick={this.showModal1} />,
      <EllipsisOutlined key="ellipsis" onClick={this.showModal} />,
    ]}
  >

    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Ergashaliyev Abbos"
      description="Boshqaruvchi"
    />

    

  </Card></Col>
  {/* ======================================= */}
  <Col sm={24} md={12} lg={6}>
                        <Card className={style.cardImg}
  
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <RiDeleteBinFill key="setting" />,
      <EditOutlined key="edit"  onClick={this.showModal1} />,
      <EllipsisOutlined key="ellipsis" onClick={this.showModal} />,
    ]}
  >

    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Mahmudova Nigora"
      description="Dasturchi"
    />

    

  </Card></Col>
  <Col sm={24} md={12} lg={6}>
                        <Card className={style.cardImg}
  
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <RiDeleteBinFill key="setting" />,
      <EditOutlined key="edit"  onClick={this.showModal1} />,
      <EllipsisOutlined key="ellipsis" onClick={this.showModal} />,
    ]}
  >

    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Mahmudova Nigora"
      description="Dasturchi"
    />

    

  </Card>
  </Col>
  {/* ================================= */}
                   </Row>
               </Container>  
      <Modal title="Hodim haqida toliq ma'lumot" width="100%"  visible={this.state.data} onOk={this.handleOk} onCancel={this.handleCancel}>
       
<div class="container">
        <div className={style.main_body}>
            <div className={style.gutters_sm} class="row">
                <div class="col-md-4 mb-3 mt-4">
                <div className={style.card}>
                    <div className={style.card_body}>
                    <div class="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                        <div class="mt-3">
                        <h4>John Doe</h4>
                        <p class="text-secondary mb-1">Full Stack Developer</p>
                        <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                        <a href="https://t.me/lmellll" class="btn btn-primary" style={{marginRight:'5px'}}>Obuna</a>
                        <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-primary" style={{marginLeft:'5px'}}><Image src={img} width={20}  /></button>
           

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <div class="column" id="main">
          <h2>Xabar yuborish</h2>
          <form>
            <div class="form-group">
              <label for="exampleInputName">Name</label>
              <input type="name" class="form-control" id="exampleInputName" placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Xabar</label>
              <textarea type="text" class="form-control" id="exampleInputPassword1" placeholder="Xabar"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
                        
                        
                        </div>
                    </div>
                    </div>
                </div>
                
                </div>
                <div class="col-md-8">
                <div className={style.card, style.mb_3, style.bg_gray_300}>
                    <div className={style.card_body}>
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        Kenneth Valdez
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        fip@jukmuh.al
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        (239) 816-9029
                        </div>
                    </div>
                    <hr />
                   
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">oylik maosh</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        1500000 so`m
                        </div>
                    </div>
                    <hr />

                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Mobile</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        (320) 380-4539
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Turar joy</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        Bay Area, San Francisco, CA
                        </div>
                    </div>
                    <hr />
                    </div>
                </div>


                </div>
            </div>
        </div>
    </div>

      </Modal>

  
        
      <Modal title="Xodim qo'shish"  visible={this.state.show} onOk={this.handleOk1} onCancel={this.handleCancel1}>

    <Form method="" action="" className={style.form} >
          <label for="name" class="form-label">Ism</label>
          <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Nigora"/>
             <label for="last_name" class="form-label">Familiya</label>
          <input type="text"
            class="form-control" name="" id="last_name" aria-describedby="helpId" placeholder="Mahmudova"/>
             <label for="email" class="form-label">Email</label>
          <input type="email"
            class="form-control" name="email" id="email" aria-describedby="helpId" placeholder="mahmudovanigora20@gmail.com"/>
             <label for="amal" class="form-label">Lavozim</label>
          <input type="text"
            class="form-control" name="amal" id="amal" aria-describedby="helpId" placeholder="dasturchi"/>
             <label for="phone" class="form-label">Tel</label>
          <input type="tel"
            class="form-control" name="phone" id="phone" aria-describedby="helpId" placeholder="+998 xx xxx xx xx"/>
             <label for="date" class="form-label">Tug'ilgan sanasi</label>
          <input type="date"
            class="form-control" name="date" id="date" aria-describedby="helpId" placeholder="11.11.1998"/>
          
          </Form> 
    
      </Modal>

   

            </div>

        ) 
    }
}

