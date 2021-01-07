import React, { useState } from "react";
import { Image, Grid } from "semantic-ui-react";
import { Form, Input, Button } from "antd";
import jsImg from "../../../Assets/tech/javascript.png";

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

export default function EditSkills() {
  const [numOfColumns, setNumOfColumns] = useState(getInitialNumOfColumns());
  const [skills, setSkills] = useState([]);

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
    const removeBtn = (name) => {
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
              removeBtn(skill.name);
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

  const skillForm = () => {
    const addSkill = (values) => {
      const newSkill = {
        img: jsImg,
        name: values.name,
        description: values.description,
      };
      const newSkills = [...skills, newSkill];
      setSkills(newSkills);
    };
    const { TextArea } = Input;
    return (
      <Grid.Column className="skillCard" key={skills.length}>
        <div className="contents">
          <Form className="addForm" onFinish={addSkill}>
            <Image
              src={jsImg}
              size="small"
              circular
              style={{ width: "75px", height: "75px" }}
              centered
              className="img"
            />
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
        {skillForm()}
      </Grid>
    </section>
  );
}
