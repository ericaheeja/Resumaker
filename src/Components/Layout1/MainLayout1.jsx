import React, { useState } from "react";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import { useSelector } from "react-redux";

const getInitialTopButtonVisible = () => {
  return window.innerWidth <= 768;
};

export default function MainLayout1() {
  const [topButtonVisible, setTopButtonVisible] = useState(getInitialTopButtonVisible());

  const resizeScreen = () => {
    if (window.innerWidth <= 768) {
      setTopButtonVisible(true);
    } else {
      setTopButtonVisible(false);
    }
  };

  window.addEventListener("resize", resizeScreen);

  const onClickHandler = () => {
    console.log("clicked");
    window.scroll(0, 0);
  };

  return (
    <div className="MainLayout1">
      <Home />
      <Portfolio />
      <Resume />
      <About />
      <Skills />
      <Contact />

      {topButtonVisible ? (
        <div className="ui fixed top sticky topButton">
          <button className="ui icon button" onClick={onClickHandler}>
            top
          </button>
        </div>
      ) : null}
    </div>
  );
}
