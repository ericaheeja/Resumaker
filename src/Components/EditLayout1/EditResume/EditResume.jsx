import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import { Form, Input, Button } from "antd";
import { uploadDataOnlyText } from "../helper/imageUpload";

const experienceForm = (experiences, setExperiences) => {
  const addExperience = (value) => {
    const newExperience = {
      title: value.title,
      position: value.position,
      period: value.period,
      description: value.description,
    };
    const newExperiences = [...experiences, newExperience];

    setExperiences(newExperiences);
  };

  const { TextArea } = Input;

  return (
    <div className="experienceCard" key={experiences.length}>
      <Form className="addForm" onFinish={addExperience}>
        <Form.Item label="period" name="period">
          <Input className="period" type="period" />
        </Form.Item>
        <Form.Item label="title" name="title">
          <Input className="experienceTitle" type="title" />
        </Form.Item>
        <Form.Item label="position" name="position">
          <Input className="position" type="position" />
        </Form.Item>
        <Form.Item label="description" name="description">
          <TextArea className="description" type="description" />
        </Form.Item>
        <Form.Item>
          <Button className="saveBtn" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const educationForm = (educations, setEducations) => {
  const addEducation = (value) => {
    const newEducation = {
      period: value.period,
      school: value.school,
      major: value.major,
      description: value.description,
    };
    const newEducations = [...educations, newEducation];
    setEducations(newEducations);
  };

  const { TextArea } = Input;

  return (
    <div className="experienceCard" key={educations.length}>
      <Form className="addEducationForm" onFinish={addEducation}>
        <Form.Item label="period" name="period">
          <Input className="period" type="period" />
        </Form.Item>
        <Form.Item label="school" name="school">
          <Input className="school" type="school" />
        </Form.Item>
        <Form.Item label="major" name="major">
          <Input className="major" type="major" />
        </Form.Item>
        <Form.Item label="description" name="description">
          <TextArea className="description" type="description" />
        </Form.Item>
        <Form.Item>
          <Button className="saveBtn" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

let numOfColumns;

const getNumOfColumns = () => {
  if (window.innerWidth <= 426) {
    numOfColumns = 1;
  } else {
    numOfColumns = 2;
  }
  return numOfColumns;
};

export default function EditResume() {
  const [col, setCol] = useState(getNumOfColumns());
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  const resizeOfScreen = () => {
    if (window.innerWidth <= 426) {
      setCol(1);
    } else {
      setCol(2);
    }
  };

  window.addEventListener("resize", resizeOfScreen);

  const experienceCard = (experience) => {
    const removeExperience = (title) => {
      const updatedExperience = experiences.filter((e) => e.title !== experience.title);
      setExperiences(updatedExperience);
    };

    return (
      <div className="experienceCard" key={experience.title}>
        <span className="period">{experience.period}</span>
        <h3 className="title">{experience.title}</h3>
        <span className="position">{experience.position}</span>
        <p className="description">{experience.description}</p>
        <Button
          className="removeBtn"
          onClick={() => {
            removeExperience(experience.title);
          }}
        >
          Remove
        </Button>
      </div>
    );
  };

  const educationCard = (education) => {
    const removeEducation = (school) => {
      const updatedEducation = educations.filter((e) => e.school !== education.school);
      setEducations(updatedEducation);
    };

    return (
      <div className="experienceCard" key={education.school}>
        <span className="period">{education.period}</span>
        <h3 className="title">{education.school}</h3>
        <span className="position">{education.major}</span>
        <p className="description">{education.description}</p>
        <button
          classNmae="removeBtn"
          onClick={() => {
            removeEducation(education.school);
          }}
        >
          Remove
        </button>
      </div>
    );
  };

  return (
    <section id="RESUME" className="editResumeContainer">
      <h2 className="title">RESUME</h2>
      <Button
        onClick={() => {
          uploadDataOnlyText(experiences, "kangmin", "experiences");
          uploadDataOnlyText(educations, "kangmin", "educations");
        }}
      >
        Upload
      </Button>
      <Grid columns={col} padded="horizontally">
        <Grid.Column>
          <h2 className="subTitle">Experience</h2>
          {experiences.map((experience) => {
            return experienceCard(experience);
          })}
          {experienceForm(experiences, setExperiences)}
        </Grid.Column>
        <Grid.Column>
          <h2 className="subTitle">Education</h2>
          {educations.map((education) => {
            return educationCard(education);
          })}
          {educationForm(educations, setEducations)}
        </Grid.Column>
      </Grid>
    </section>
  );
}
