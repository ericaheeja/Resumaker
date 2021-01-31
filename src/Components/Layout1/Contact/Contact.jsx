import React from "react";
import {
  SlackOutlined,
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

export default function Contact() {
  return (
    <div className="contact" id="CONTACT">
      <h2 className="contactTitle">Contact Details</h2>
      <section className="userInfo">
        <h4>NAME</h4>
        <p>Awesome Resumaker</p>

        <h4>ADDRESS</h4>
        <p>downtown, vancouver, BC V3G 3H7</p>

        <h4>EMAIL</h4>
        <p>resumaker@gmail.com</p>

        <h4>PHONE</h4>
        <p>123 456 7890</p>
      </section>
      <section
        style={{
          fontSize: "1.8em",
        }}
        className="resumeIcon"
      >
        {" "}
        <LinkedinOutlined style={{ marginRight: "2%", marginLeft: "2%", cursor: "pointer" }} />
        <GithubOutlined style={{ marginRight: "2%", marginLeft: "2%", cursor: "pointer" }} />
        <SlackOutlined style={{ marginRight: "2%", marginLeft: "2%", cursor: "pointer" }} />
        <FacebookOutlined
          style={{
            marginRight: "2%",
            marginLeft: "2%",
            cursor: "pointer",
          }}
        />
        <TwitterOutlined
          style={{
            marginRight: "2%",
            marginLeft: "2%",
            marginTop: "2.5%",
            marginBottom: "5%",
            cursor: "pointer",
          }}
        />
      </section>
    </div>
  );
}
