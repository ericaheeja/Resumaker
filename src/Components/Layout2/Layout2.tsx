import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Image } from "semantic-ui-react";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Me from "../../Assets/layout2/jcelee.jpeg";

const { Sider } = Layout;

export default function Layout2() {
  const [visible, setVisible] = useState(false);
  const [forcedRender, setForcedRender] = useState(false);

  const reRender = () => {
    relocateNavbar();
    setForcedRender(!forcedRender);
  };

  window.addEventListener("resize", reRender);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    reRender();
  }, []);

  const relocateNavbar = () => {
    if (window.innerWidth >= 1024) {
      document.getElementById("navbarLaptop").style.left = "calc((100vw - 1024px)/2)";
    }
  };

  const handleItemClick = (name) => {
    setVisible(false);
    const skills = document.getElementById(name);
    skills?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  return (
    <div className="layout2">
      {window.innerWidth >= 768 ? (
        <Sider width="256px">
          <div className="navbar" id="navbarLaptop" style={{ background: "#fff" }}>
            <div className="imgWrapper">
              <Image
                src={Me}
                size="small"
                circular
                style={{
                  margin: "25px auto",
                  width: "175px",
                  height: "175px",
                  borderRadius: "100%",
                }}
                centered
              />
            </div>
            <div className="siderContents" style={{ textAlign: "center" }}>
              <h2>이강민</h2>
              <h5>
                <span style={{ color: "#2c98f0" }}> Junior Front-End Developer</span>
              </h5>
              <div className="menu">
                <p onClick={() => handleItemClick("home")}>HOME</p>
                <p onClick={() => handleItemClick("about")}>ABOUT</p>
                <p onClick={() => handleItemClick("skills")}>{`WORKS & SKILLS`}</p>
                <p onClick={() => handleItemClick("experience")}>EXPERIENCE</p>
                <p onClick={() => handleItemClick("contact")}>CONTACT</p>
              </div>
              <div style={{ fontSize: "30px" }}>
                <FacebookOutlined style={{ padding: "10px" }} />
                <InstagramOutlined style={{ padding: "10px" }} />
                <LinkedinOutlined style={{ padding: "10px" }} />
                <GithubOutlined style={{ padding: "10px" }} />
              </div>
            </div>
          </div>
        </Sider>
      ) : (
        <></>
      )}

      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />

      {window.innerWidth < 768 ? (
        <div>
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
          <Drawer placement="left" closable={false} onClose={onClose} visible={visible}>
            <div className="navbar">
              <div className="imgWrapper">
                <Image
                  src={Me}
                  size="small"
                  circular
                  style={{
                    margin: "25px auto",
                    width: "175px",
                    height: "175px",
                    borderRadius: "100%",
                  }}
                  centered
                />
              </div>
              <div className="siderContents" style={{ textAlign: "center" }}>
                <h2>이강민</h2>
                <h5>
                  <span style={{ color: "#2c98f0" }}> Junior Front-End Developer</span>
                </h5>
                <div className="menu">
                  <p onClick={() => handleItemClick("home")}>HOME</p>
                  <p onClick={() => handleItemClick("about")}>ABOUT</p>
                  <p onClick={() => handleItemClick("skills")}>{`WORKS & SKILLS`}</p>
                  <p onClick={() => handleItemClick("experience")}>EXPERIENCE</p>
                  <p onClick={() => handleItemClick("contact")}>CONTACT</p>
                </div>
                <div style={{ fontSize: "30px" }}>
                  <FacebookOutlined style={{ padding: "10px" }} />
                  <InstagramOutlined style={{ padding: "10px" }} />
                  <LinkedinOutlined style={{ padding: "10px" }} />
                  <GithubOutlined style={{ padding: "10px" }} />
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
