import React, { Component } from "react";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
export default class Ssut extends Component {
  render() {
    return (
      <div>
        {" "}
        <Navbar1 />
        <div
          style={{
            margin: "auto",
            textAlign: "center",
            fontSize: "40px",
            marginTop: "140px",
          }}
        >
          sut litri 3500so`m
        </div>
        <Footer />
      </div>
    );
  }
}
