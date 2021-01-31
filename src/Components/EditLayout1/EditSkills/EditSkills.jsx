import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Upload, Image } from "antd";
import { dummyRequest, getBase64, beforeUpload, uploadDataWithImg } from "../helper/imageUpload";
import ImgCrop from "antd-img-crop";

function SkillForm(skills, setSkills) {
  const [loading, setLoading] = useState(false);
  const [imageRef, setImageRef] = useState(null);
  const [originFile, setOriginFile] = useState(null);

  const handleChange = (photo) => {
    if (photo.file.status === "uploading") {
      setLoading(true);
    }
    if (photo.file.status === "done") {
      // Get this url from response in real world.
      getBase64(photo.file.originFileObj, (imageUrl) => {
        setImageRef(imageUrl);
        setOriginFile(photo.file);
        setLoading(false);
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
      img: imageRef,
      name: values.name,
      description: values.description,
      originFile: originFile,
    };
    const newSkills = [...skills, newSkill];
    setSkills(newSkills);
    setImageRef(null);
    setOriginFile(null);
  };

  const { TextArea } = Input;

  return (
    <Grid.Column className="skillCard" key={skills.length}>
      <div className="contents">
        {/* <ImgCrop rotate shape={"round"} > */}
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          customRequest={dummyRequest}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageRef !== null ? (
            <Image src={imageRef} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
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
              Done
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

  function getInitialNumOfColumns() {
    let initialNumOfColumns = 3;
    if (window.innerWidth <= 426) {
      initialNumOfColumns = 1;
    } else if (window.innerWidth <= 768) {
      initialNumOfColumns = 2;
    }
    return initialNumOfColumns;
  }

  const resizeScreen = () => {
    if (window.innerWidth <= 426) {
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
            // style={{ width: "75px", height: "75px" }}
            centered
            className="img"
          />

          <h3 className="name">{skill.name}</h3>
          <p className="description">{skill.description}</p>
          <Button
            className="removeBtn"
            onClick={() => {
              removeBtn();
            }}
          >
            remove
          </Button>
        </div>
      </Grid.Column>
    );
  };

  return (
    <section className="editSkillsContainer" id="SKILLS">
      <h2 className="skillsTitle">Skills</h2>
      <Grid columns={numOfColumns} padded="horizontally">
        {skills.map((skill) => {
          return skillCard(skill);
        })}
        {SkillForm(skills, setSkills, skills.imageRef)}
      </Grid>
      <div className="skillsSave">
        <Button
          onClick={() => {
            uploadDataWithImg(skills, "kangmin", "skills");
          }}
        >
          Save skills
        </Button>
      </div>
    </section>
  );
}
