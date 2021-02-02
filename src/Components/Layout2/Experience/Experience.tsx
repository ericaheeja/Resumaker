import React from "react";
import { Timeline, Image } from "antd";
import { TrophyOutlined } from "@ant-design/icons";
import bookito from "../../../Assets/layout2/bookito.jpeg";
import resumaker from "../../../Assets/layout2/resumaker.jpeg";
import strongGame from "../../../Assets/layout2/strongGame.png";

const experiences = [
  {
    title: "bookito",
    url: bookito,
    techList: ["JavaScript", "React", "Redux", "sass/scss", "Firebase", "ant-design", "devexpress"],
  },
  {
    title: "resumaker",
    url: resumaker,
    techList: [
      "JavaScript",
      "React",
      "Redux",
      "Firebase",
      "sass/scss",
      "TypeScript",
      "ant-design",
      "material-ui",
    ],
  },
  {
    title: "BICC Professional Inc",
    url: strongGame,
    techList: ["React", "React-native", "JavaScript", "AWS"],
  },
  {
    title: "Strong-Game",
    url: strongGame,
    techList: ["JavaScript", "Jquery", "Php", "Socket.IO", "mySQL"],
  },
];

export default function Experience() {
  const workCard = (work, index) => {
    return (
      <li className="work" key={index}>
        {work}
      </li>
    );
  };

  const imageCard = (experience, index) => {
    return (
      <li className="imageCard" key={index}>
        <div className="imgWrapper">
          <Image src={experience.url} width={"100%"} height={"100%"} />
        </div>
        <div className="innerContent">
          <p className="title">{experience.title}</p>
          <ul className="worksList">
            {experience.techList.map((tech, index) => workCard(tech, index))}
          </ul>
        </div>
      </li>
    );
  };

  return (
    <section id="experience" className="experienceContainer">
      <div className="contents">
        <h5>EXPERIENCE</h5>
        <h4>WORK EXPERIENCE</h4>
        <ul>{experiences.map((experience, index) => imageCard(experience, index))}</ul>
      </div>
    </section>
  );
}
