import React, { useState } from "react";
import {
  SlackOutlined,
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Radio } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const socialMediaList = [
  { value: "linkedIn", icon: <LinkedinOutlined /> },
  { value: "github", icon: <GithubOutlined /> },
  { value: "slack", icon: <SlackOutlined /> },
  { value: "facebook", icon: <FacebookOutlined /> },
  { value: "twitter", icon: <TwitterOutlined /> },
];

const onFinish = (values) => {
  console.log("Finish:", values);
};

export default function EditContact() {
  const [value, setValue] = useState("");

  const radioOption = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div className="editContactContainer" id="CONTACT">
        <h2 className="contactDetailTitle">Contact Details</h2>
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

          <Radio.Group className="socialRadio" onChange={radioOption} value={value}>
            {socialMediaList.map((socialMedia, index) => {
              return (
                <Radio className="radio" key={index} value={socialMedia.value}>
                  {socialMedia.icon}
                </Radio>
              );
            })}
          </Radio.Group>
          <Button className="doneBtn" htmlType="submit">
            Done
          </Button>
        </Form>
        <div className="contactSave">
          <Button>Save contact</Button>
        </div>
      </div>
    </>
  );
}
