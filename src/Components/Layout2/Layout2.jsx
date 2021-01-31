import {Layout, Menu} from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import {Image, Grid} from "semantic-ui-react";
import sampleImg from "../../../src/Assets/layout2/sampleFace.jpg";
import Home from "./Home/Home";
import About from "./About/About";
import Work from "./Work/Work";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

const {Header, Content, Footer, Sider} = Layout;

export default function Layout2() {
  return (
    <div className="layout2">
      <Layout style={{minHeight: "100vh", maxWidth: "1200px", margin: "auto"}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            collapsed
              ? (document.getElementById("mainContents").style.marginLeft = 0)
              : (document.getElementById("mainContents").style.marginLeft = "300px");
          }}
          width="300px"
          style={{background: "#f2f3f7"}}
        >
          <div className="navbar">
            <Image
              src={sampleImg}
              size="small"
              circular
              style={{
                maxWidth: "175px",
                maxHeight: "175px",
                margin: "50px auto",
                width: "40vw",
                height: "40vw",
              }}
              centered
              className="img"
            />
            <div className="siderContents" style={{textAlign: "center"}}>
              <h2>Racheal</h2>
              <h5>
                <span style={{color: "#2c98f0"}}>Front-End Developer</span> in Vancouver
              </h5>
              <br/>
              <p>HOME</p>
              <p>ABOUT</p>
              <p>{`WORKS & SKILLS`}</p>
              <p>EDUCATION</p>
              <p>EXPERIENCE</p>
              <p>CONTACT</p>
              <div style={{fontSize: "30px"}}>
                <FacebookOutlined style={{padding: "10px"}}/>
                <InstagramOutlined style={{padding: "10px"}}/>
                <LinkedinOutlined style={{padding: "10px"}}/>
                <GithubOutlined style={{padding: "10px"}}/>
              </div>
            </div>
          </div>
        </Sider>
        <Layout id="mainContents">
          <Content>
            <Home/>
            <About/>
            <Work/>
            <Education/>
            <Experience/>
          </Content>
          <Footer style={{textAlign: "center"}}>Ant Design ©2021 Created by RESUMAKER</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

function MainView() {


  const relocateNavbar = () => {
    if (window.innerWidth >= 1024) {
      document.getElementById("navbarLaptop").style.left = "calc((100vw - 1024px)/2)";
    }
  };

  const handleItemClick = (name) => {
    const skills = document.getElementById(name);
    if (skills === null) {
      window.scroll(0, 0);
    }

    console.log(skills);

    skills?.scrollIntoView({block: "end", behavior: "smooth"});
    const scrolledY = window.scrollY;

    if (scrolledY) {
      window.scroll(0, scrolledY);
    }
  };

  return (
    <div className="layout">
      {window.innerWidth >= 768 ? (
        <Sider width="256px">
          <div className="navbar" id="navbarLaptop" style={{background: "#fff"}}>
            <div className="imgWrapper">
              <Image
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
            <div className="siderContents" style={{textAlign: "center"}}>
              <h2>이강민</h2>
              <h5>
                <span style={{color: "#2c98f0"}}> Junior Front-End Developer</span>
              </h5>
              <div className="menu">
                <p onClick={() => handleItemClick("home")}>HOME</p>
                <p onClick={() => handleItemClick("about")}>ABOUT</p>
                <p onClick={() => handleItemClick("skills")}>{`WORKS & SKILLS`}</p>
                <p onClick={() => handleItemClick("experience")}>EXPERIENCE</p>
                <p onClick={() => handleItemClick("contact")}>CONTACT</p>
              </div>
              <div style={{fontSize: "30px"}}>
                <FacebookOutlined style={{padding: "10px"}}/>
                <InstagramOutlined style={{padding: "10px"}}/>
                <LinkedinOutlined style={{padding: "10px"}}/>
                <GithubOutlined style={{padding: "10px"}}/>
              </div>
            </div>
          </div>
        </Sider>
      ) : (
        <></>
      )}


      {window.innerWidth < 768 ? (
        <div>
          <button type="primary">
            Open
          </button>
          <div placement="left" closable={false}>
            <div className="navbar">
              <div className="imgWrapper">
                <Image

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
              <div className="siderContents" style={{textAlign: "center"}}>
                <h2>이강민</h2>
                <h5>
                  <span style={{color: "#2c98f0"}}> Junior Front-End Developer</span>
                </h5>
                <div className="menu">
                  <p onClick={() => handleItemClick("home")}>HOME</p>
                  <p onClick={() => handleItemClick("about")}>ABOUT</p>
                  <p onClick={() => handleItemClick("skills")}>{`WORKS & SKILLS`}</p>
                  <p onClick={() => handleItemClick("experience")}>EXPERIENCE</p>
                  <p onClick={() => handleItemClick("contact")}>CONTACT</p>
                </div>
                <div style={{fontSize: "30px"}}>
                  <FacebookOutlined style={{padding: "10px"}}/>
                  <InstagramOutlined style={{padding: "10px"}}/>
                  <LinkedinOutlined style={{padding: "10px"}}/>
                  <GithubOutlined style={{padding: "10px"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

