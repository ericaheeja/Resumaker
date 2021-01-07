import React, { useState, useRef } from "react";
import { Image, Grid } from "semantic-ui-react";
import jsImg from "../../../Assets/tech/javascript.png";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, message } from "antd";
import ImgCrop from "antd-img-crop";

let initialNumOfColumns;

const getInitialNumOfColumns = () => {
  if (window.innerWidth <= 425) {
    initialNumOfColumns = 1;
  } else if (window.innerWidth <= 768) {
    initialNumOfColumns = 2;
  } else {
    initialNumOfColumns = 3;
  }
  return initialNumOfColumns;
};

const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

function SkillForm(skills, setSkills, fileList) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      console.log(info.file.status);
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      console.log(info.file.status);
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        fileList.current.push(imageUrl);
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const addSkill = (values) => {
    const newSkill = {
      img: imageUrl,
      name: values.name,
      description: values.description,
    };
    const newSkills = [...skills, newSkill];
    setImageUrl(null);
    setSkills(newSkills);
  };

  const { TextArea } = Input;

  return (
    <Grid.Column className="skillCard" key={skills.length}>
      <div className="contents">
        {/* <ImgCrop rotate shape={"round"} modalWidth={520}> */}
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          customRequest={dummyRequest}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
        </Upload>
        {/* </ImgCrop> */}
        <Form className="addForm" onFinish={addSkill}>
          <Form.Item label="Name" name="name" className="formName">
            <Input className="clientInput" type="name" />
          </Form.Item>
          <Form.Item label="Description" name="description" className="formDescription">
            <TextArea className="clientInput" type="description" />
          </Form.Item>
          <Form.Item>
            <Button className="saveBtn" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Grid.Column>
  );
}

export default function EditSkills() {
  const [numOfColumns, setNumOfColumns] = useState(getInitialNumOfColumns());
  const [skills, setSkills] = useState([]);
  const fileList = useRef([]);

  console.log(fileList.current);

  const resizeScreen = () => {
    if (window.innerWidth <= 425) {
      setNumOfColumns(1);
    } else if (window.innerWidth <= 768) {
      setNumOfColumns(2);
    } else {
      setNumOfColumns(3);
    }
  };

  window.addEventListener("resize", resizeScreen);

  const skillCard = (skill) => {
    const removeBtn = () => {
      const updatedArr = skills.filter((e) => e.name !== skill.name);
      setSkills(updatedArr);
    };

    return (
      <Grid.Column className="skillCard" key={skill.name}>
        <div className="contents">
          <Image
            src={skill.img}
            size="small"
            circular
            style={{ width: "75px", height: "75px" }}
            centered
            className="img"
          />
          <button
            className="removeBtn"
            onClick={() => {
              removeBtn();
            }}
          >
            remove
          </button>
          <h3 className="name">{skill.name}</h3>
          <p className="description">{skill.description}</p>
        </div>
      </Grid.Column>
    );
  };

  return (
    <section className="SkillsContainer" id="SKILLS">
      <div className="title">
        <h2>Skills</h2>
      </div>
      <Grid columns={numOfColumns} padded="horizontally">
        {skills.map((skill) => {
          return skillCard(skill);
        })}
        {SkillForm(skills, setSkills, fileList)}
      </Grid>
    </section>
  );
}
