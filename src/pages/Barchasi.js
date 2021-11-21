import React, { Component } from "react";
import { Route, Routes } from "react-router";
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
          <Routes>
            <Route path="/ishtartibi" element={ <Ishtartibi />} />
            <Route path="/" element={ <Smol />}/>
            <Route path="/Ssut" element={<Ssut />}/>
              <Route path="/Syem" element={<Syem />}/>
            <Route path="/boglanish" element={<Boglanish />}/>
            <Route path="/hodimlar" element={<Hodimlar />}/>
            <Route path="/mollar" element={<Mollar />}/>
            <Route path="/" element={<BoshSahifa />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
