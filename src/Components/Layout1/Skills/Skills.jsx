import React, { useState } from "react";
import { Image, Grid } from "semantic-ui-react";
import htmlImg from "../../../Assets/tech/javascript.png";
import jsImg from "../../../Assets/tech/javascript.png";
import reactImg from "../../../Assets/tech/javascript.png";
import reduxImg from "../../../Assets/tech/scss.png";
import scssImg from "../../../Assets/tech/scss.png";

const skills = [
  {
    name: "html",
    img: htmlImg,
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    name: "javascript",
    img: jsImg,
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    name: "react",
    img: reactImg,
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    name: "redux",
    img: reduxImg,
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    name: "scss",
    img: scssImg,
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    name: "typescript",
    img: jsImg,
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
  },
];

const skillCard = (skill) => {
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
        <h3 className="name">{skill.name}</h3>
        <p className="description">{skill.description}</p>
      </div>
    </Grid.Column>
  );
};

export default function Skills() {
  const [numOfColumns, setNumOfColumns] = useState(1);
  console.log(window.innerWidth);
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

  return (
    <section className="SkillsContainer" id="SKILLS">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <Grid container columns={numOfColumns}>
        {skills.map((skill) => {
          return skillCard(skill);
        })}
      </Grid>
    </section>
  );
}
