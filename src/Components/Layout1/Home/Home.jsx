import React, {useState, useRef} from "react";
import {Icon, Menu, Segment, Image} from "semantic-ui-react";
import {Link} from "react-router-dom";
import userPicture from "../../../Assets/me.png";
import Button from "../../commonComponents/Button";

export default function Home() {
  const activeItem = useRef("home");
  const [open, setOpen] = useState(window.innerWidth >= 990);
  const desktopMode = useRef(false);
  const memory = useRef(true);
  const screenSize = useRef(window.innerWidth);

  const resizeScreen = () => {
    screenSize.current = window.innerWidth;
    if (screenSize.current > 990 && desktopMode.current === false) {
      memory.current = open;
      document.getElementById("menuItem").style.display = "row";
      setOpen(true);
    } else if (screenSize.current < 990 && desktopMode.current === true) {
      setOpen(memory.current);
    }
  };

  window.addEventListener("resize", resizeScreen);

  const handleItemClick = (name) => {
    activeItem.current = name.target.innerHTML;
    const skills = document.getElementById(activeItem.current);
    const navHeight = document.getElementsByClassName("ui inverted segment")[0].clientHeight;
    if (skills === null) {
      window.scroll(0, navHeight);
    }

    skills?.scrollIntoView({block: "end", behavior: "smooth"});
    const scrolledY = window.scrollY;

    if (scrolledY) {
      window.scroll(0, scrolledY - navHeight);
    }
  };

  const navbarClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <section className="navbar">
        <div className="ui fixed top sticky">
          <Segment inverted>
            <a className="bars" onClick={navbarClick}>
              <Icon name="bars"/>
            </a>
            <div className="menuItem" id="menuItem">
              {open ? (
                <Menu inverted secondary>
                  <Menu.Item
                    name="HOME"
                    active={activeItem.current === "HOME"}
                    onClick={handleItemClick}
                  />
                  <Menu.Item
                    name="PORTFOLIO"
                    active={activeItem.current === "PORTFOLIO"}
                    onClick={handleItemClick}
                  />
                  <Menu.Item
                    name="RESUME"
                    active={activeItem.current === "RESUME"}
                    onClick={handleItemClick}
                  />
                  <Menu.Item
                    name="ABOUT"
                    active={activeItem.current === "ABOUT"}
                    onClick={handleItemClick}
                  />
                  <Menu.Item
                    name="SKILLS"
                    active={activeItem.current === "SKILLS"}
                    onClick={handleItemClick}
                  />
                  <Menu.Item
                    name="CONTACT"
                    active={activeItem.current === "CONTACT"}
                    onClick={handleItemClick}
                  />
                </Menu>
              ) : null}
            </div>
          </Segment>
        </div>
      </section>
      <Link to="/editLayout1">
        <div className="useThisTemplateButton">
          <Button text="Use This Template"></Button>
        </div>
      </Link>
      <div className="userPicture">
        <h1>
          Hello, I'm <strong className="userNameHeader">Resume Maker</strong>
        </h1>
        <strong className="userNameHeader" id="thisIsMyResume">
          AND THIS IS MY RESUME
        </strong>
      </div>
    </>
  );
}
