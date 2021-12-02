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
            <div>  <Button variant="primary"   style={{margin:'20px'}}>Hodim yaratish</Button>
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
                        <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-primary" style={{marginLeft:'5px'}}>Xabar</button>
           
{/* <!-- Modal --> */}
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
                        <h6 class="mb-0">Pasport raqami</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        ABxxxxxxxx
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
{/* ------------------------------------------------------------- */}
      </Modal>


   

            </div>

        ) 
    }
}

