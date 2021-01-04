import React from "react";
import "./App.scss";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import {Divider} from "semantic-ui-react";

export default function App() {
  return (
    <div className="App">
      <Home/>
      <Divider hidden/>
      <Portfolio/>
      <Resume/>
      <About/>
      <Divider hidden/>
      <Skills/>
      <Divider hidden/>
    </div>
  );
}
