import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import cows3 from "../img/cows.png";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import style from "../css/Navbar1.module.css";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
export default class Navbar1 extends Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="/Smol">Mol</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/Syem">Yem xahak</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <Link to="/Ssut">Sut</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <div style={{ position: "absolute", top: "0px", left: "0px" }}>
        <Navbar
          style={{
            background: "#14273E",
            position: "fixed",
            width: "100%",
            zIndex: "10",
          }}
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="#">
              <img
                src={cows3}
                alt=" "
                style={{ width: "100px", height: "100px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              style={{ color: "white", border: "none" }}
            >
              <ImMenu color="white" style={{ fontSize: "35px" }} />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto" id={style.toggle}>
                <Nav.Link href="/" className={style.toggle1}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "18px",
                    }}
                    to="/"
                  >
                    Bosh Saxifa
                  </Link>{" "}
                </Nav.Link>

                <Dropdown overlay={menu} trigger={["click"]}>
                  <a
                    className={style.toggle1}
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "18px",
                    }}
                    className={style.sotiladi}
                  >
                    Sotiladi
                    <DownOutlined
                      style={{
                        color: "white",
                        position: "relative",

                        left: "10px",
                      }}
                    />
                  </a>
                </Dropdown>

                <Nav.Link className={style.toggle1}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "18px",
                    }}
                    to="/ishtartibi"
                  >
                    Ish Tartibi
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link className={style.toggle1}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "18px",
                    }}
                    to="/hodimlar"
                  >
                    Hodimlar
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link className={style.toggle1}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "18px",
                    }}
                    to="/mollar"
                  >
                    Mollar
                  </Link>{" "}
                </Nav.Link>
                <Nav.Link className={style.toggle1}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontSize: "18px",
                    }}
                    to="/boglanish"
                  >
                    Boglanish
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
