import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { Image, Grid } from "semantic-ui-react";
import sampleImg from "../../../src/Assets/layout2/sampleFace.jpg";
import Home from "./Home/Home";
import About from "./About/About";
import Work from "./Work/Work";

const { Header, Content, Footer, Sider } = Layout;

export default function Layout2() {
  return (
    <div className="layout2">
      <Layout style={{ minHeight: "100vh", maxWidth: "1200px", margin: "auto" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => {
            collapsed
              ? (document.getElementById("mainContents").style.marginLeft = 0)
              : (document.getElementById("mainContents").style.marginLeft = "300px");
            console.log(collapsed);
          }}
          width="300px"
          style={{ background: "#f2f3f7" }}
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
            <div className="siderContents" style={{ textAlign: "center" }}>
              <h2>Racheal</h2>
              <h5>
                <span style={{ color: "#2c98f0" }}>Front-End Developer</span> in Vancouver
              </h5>
              <br />
              <p>HOME</p>
              <p>ABOUT</p>
              <p>WORKS</p>
              <p>SKILLS</p>
              <p>EDUCATION</p>
              <p>EXPERIENCE</p>
              <p>CONTACT</p>
              <div style={{ fontSize: "30px" }}>
                <FacebookOutlined style={{ padding: "10px" }} />
                <InstagramOutlined style={{ padding: "10px" }} />
                <LinkedinOutlined style={{ padding: "10px" }} />
                <GithubOutlined style={{ padding: "10px" }} />
              </div>
            </div>
          </div>
        </Sider>
        <Layout id="mainContents">
          <Content>
            <Home />
            <About />
            <Work />
          </Content>
          <Footer style={{ textAlign: "center" }}>Ant Design ©2021 Created by RESUMAKER</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
