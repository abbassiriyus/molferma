import React, { Component } from "react";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
import { Table } from "react-bootstrap";
import style from "../css/ishtartibi.module.css";
export default class Ishtartibi extends Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <div className={style.ishtartibi}>
          <h2 style={{ margin: "auto", textAlign: "center", padding: "20px" }}>
            Sigir sog`ilishi
          </h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Sut vaqti</th>
                <th>Yem vaqti</th>
                <th>Tozalov vaqti</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  10<sup>00</sup>
                </td>
                <td>
                  14<sup>00</sup>
                </td>
                <td>
                  02<sup>00</sup>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  14<sup>00</sup>
                </td>
                <td>
                  14<sup>00</sup>
                </td>
                <td>
                  14<sup>00</sup>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  02<sup>00</sup>
                </td>
                <td>
                  02<sup>00</sup>
                </td>
                <td>yo`q</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Footer />
      </div>
    );
  }
}
