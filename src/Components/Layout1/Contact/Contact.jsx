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
    <div className="contact">
      <h2>Contact Details</h2>
      <section className="userInfo">
        <p>
          <h4>NAME</h4>
          Awesome Resumaker
        </p>
        <p>
          <h4>ADDRESS</h4>
          downtown, vancouver, BC V3G 3H7
        </p>
        <p>
          <h4>EMAIL</h4>
          resumaker@gmail.com
        </p>
        <p>
          <h4>PHONE</h4>
          123 456 7890
        </p>
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
