import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Boglanish from "./js/Boglanish";

import BoshSahifa from "./js/BoshSahifa";
import Hodimlar from "./js/Hodimlar";
import Ishtartibi from "./js/Ishtartibi";
import Mollar from "./js/Mollar";
import Smol from "./js/Smol";
import Ssut from "./js/Ssut";
import Syem from "./js/Syem";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/ishtartibi">
              <Ishtartibi />
            </Route>
            <Route path="/Smol">
              <Smol />
            </Route>{" "}
            <Route path="/Ssut">
              <Ssut />
            </Route>
            <Route path="/Syem">
              <Syem />
            </Route>
            <Route path="/boglanish">
              <Boglanish />
            </Route>
            <Route path="/hodimlar">
              <Hodimlar />
            </Route>
            <Route path="/mollar">
              <Mollar />
            </Route>
            <Route path="/">
              <BoshSahifa />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
