import React from "react";
import {
  SlackOutlined,
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, message, Row, Col } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const onFinish = (values) => {
  console.log("Finish:", values);
};

export default function EditContact() {
  return (
    <>
      <div className="contact" id="CONTACT">
        <h2>Contact Details</h2>

        <Form {...layout} className="contactForm" onFinish={onFinish}>
          <Form.Item label="Name" name="name" className="formName">
            <Input className="clientInput" type="name" required={true} />
          </Form.Item>
          <Form.Item label="Address" name="address" className="formAddress">
            <Input className="clientInput" type="address" required={true} />
          </Form.Item>
          <Form.Item label="Email" name="email" className="formEmail">
            <Input className="clientInput" type="email" required={true} />
          </Form.Item>
          <Form.Item label="Phone" name="phone" className="formPhone">
            <Input className="clientInput" type="phone" required={true} />
          </Form.Item>

          <Form.Item label="LinkedIn" name="linkedin" className="formLinkedin">
            <Input className="clientInput" type="linkedin" />
          </Form.Item>
          <Form.Item label="GitHub" name="github" className="formGithub">
            <Input className="clientInput" type="github" />
          </Form.Item>
          <Form.Item label="Slack" name="slack" className="formSlack">
            <Input className="clientInput" type="slack" />
          </Form.Item>
          <Form.Item label="FaceBook" name="facebook" className="formFacebook">
            <Input className="clientInput" type="facebook" />
          </Form.Item>
          <Form.Item label="Twitter" name="twitter" className="formTwitter">
            <Input className="clientInput" type="twitter" />
          </Form.Item>

          <Form.Item>
            <Button className="saveBtn" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>

        <section
          style={{
            fontSize: "1.8em",
          }}
          className="resumeIcon"
        >
          {" "}
          <LinkedinOutlined
            style={{ marginRight: "2%", marginLeft: "2%", cursor: "pointer" }}
          />
          <GithubOutlined
            style={{ marginRight: "2%", marginLeft: "2%", cursor: "pointer" }}
          />
          <SlackOutlined
            style={{ marginRight: "2%", marginLeft: "2%", cursor: "pointer" }}
          />
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
    </>
  );
}
