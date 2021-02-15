import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Image } from "semantic-ui-react";
import {Home} from "./Home/Home";
import {About} from "./About/About";
import {Skills} from "./Skills/Skills";
import {Experience} from "./Experience/Experience";
import {Contact} from "./Contact/Contact";
import Me from "../../Assets/layout2/jcelee.jpeg";

const { Sider } = Layout;

export const Layout2 : React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [forcedRender, setForcedRender] = useState<boolean>(false);

  const reRender = () : void=> {
    relocateNavbar();
    setForcedRender(!forcedRender);
  };

  window.addEventListener("resize", reRender);

  const showDrawer = () : void => {
    setVisible(true);
  };

  const onClose = () : void => {
    setVisible(false);
  };

  useEffect(() : void => {
    reRender();
  }, []);

  const relocateNavbar = () : void => {
    if (window.innerWidth >= 1024) {
      document.getElementById("navbarLaptop")!.style.left = "calc((100vw - 1024px)/2)";
    }
  };

  const handleItemClick = (name : string) : void => {
    setVisible(false);
    const skills = document.getElementById(name)!;
    skills?.scrollIntoView({ block: "end", behavior: "smooth" });
  };

  return (
    <main className="layout2">
      {window.innerWidth >= 768 ? (
        <Sider width="256px">
          <nav className="navbar" id="navbarLaptop" style={{ background: "#fff" }}>
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
            <div className="siderContents">
              <h2>이강민</h2>
              <h5>
                <span style={{ color: "#2c98f0" }}> Junior Front-End Developer</span>
              </h5>
              <ul className="menu">
                <li onClick={() => handleItemClick("home")}>HOME</li>
                <li onClick={() => handleItemClick("about")}>ABOUT</li>
                <li onClick={() => handleItemClick("skills")}>{`WORKS & SKILLS`}</li>
                <li onClick={() => handleItemClick("experience")}>EXPERIENCE</li>
                <li onClick={() => handleItemClick("contact")}>CONTACT</li>
              </ul>
              <div style={{ fontSize: "30px" }}>
                <FacebookOutlined style={{ padding: "10px" }} />
                <InstagramOutlined style={{ padding: "10px" }} />
                <LinkedinOutlined style={{ padding: "10px" }} />
                <GithubOutlined style={{ padding: "10px" }} />
              </div>
            </div>
          </nav>
        </Sider>
      ) : (
        <></>
      )}
      <div className="components">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>

      {window.innerWidth < 768 ? (
        <>
          <Button className="drawerBtn" type="primary" onClick={showDrawer}>
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
        </>
      ) : (
        <></>
      )}
    </main>
  );
}
