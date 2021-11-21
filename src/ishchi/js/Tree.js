import React, { Component } from "react";
import style from '../css/Tree.module.css'

export default class Tree extends Component {
  render() {
    return <div>
      <button className={style.btnPlus}>+</button>
      <h2>334444555 <span>sum</span></h2>
      <button>-</button>
    </div>;
  }
}
