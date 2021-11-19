import React, { Component } from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Barchasi from "./pages/Barchasi";
import Center from './ishchi/js/Center'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
      <Route exact path="/">
      <Barchasi />
      </Route>
      <Route path="/admin">
          <Center />
      </Route>
    </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}
