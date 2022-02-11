import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Switch, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Clasa from "./components/Clasa/Clasa";
import Lectii from "./components/Lectii/Lectii";
import Documente from "./components/Manuale-Documente/Documente";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Despre">
            <About />
          </Route>
          <Route path="/Clasa">
            <Clasa />
          </Route>
          <Route path="/Lectii">
            <Lectii />
          </Route>
          <Route path="/Documente">
            <Documente />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
