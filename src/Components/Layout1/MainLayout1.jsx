import React from "react";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";
import About from "./About/About";
import Skills from "./Skills/Skills";

export default function MainLayout1() {
  return (
    <div className="MainLayout1">
      <Home />
      <Portfolio />
      <Resume />
      <About />
      <Skills />
    </div>
  );
}
