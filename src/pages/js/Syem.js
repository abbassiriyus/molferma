import React, { Component } from "react";
import Footer from "./Footer";
import { Table } from "react-bootstrap";
import Navbar1 from "./Navbar1";
export default class Syem extends Component {
  render() {
    return (
      <div>
        {" "}
        <Navbar1 />
        <div style={{ marginTop: "140px" }}>
          <h2 style={{ margin: "auto", textAlign: "center", padding: "20px" }}>
            Bizning sotiladigan yem hashaklarimiz
          </h2>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nomi</th>
                <th>Narxi</th>
                <th>Miqdori</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Selos</td>
                <td>500so`m</td>
                <td>1tonna</td>
              </tr>
              <tr>
                <td>2</td>
                <td>pres(somon)</td>
                <td>1000dona</td>
                <td>20000dan</td>
              </tr>
              <tr>
                <td>3</td>
                <td>press(beda)</td>
                <td>25000so`m</td>
                <td>50tx</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Footer />
      </div>
    );
  }
}
