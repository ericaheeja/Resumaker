import React from "react";
import { Image } from "antd";
import work1 from "../../../Assets/layout2/work1.jpg";
import work2 from "../../../Assets/layout2/work2.jpg";
import work3 from "../../../Assets/layout2/work3.jpg";

const imageCard = (file, index) => {
  return (
    <li className="imageCard" key={index}>
      <div className="imgWrapper">
        <Image src={file.url} width={"100%"} height={"100%"} />
      </div>
      <div className="innerContent">
        <p className="title">{file.title}</p>
        <p className="subtitle">{file.subtitle}</p>
      </div>
    </li>
  );
};

const workCard = (work, index) => {
  return (
    <li className="work" key={index}>
      {work}
    </li>
  );
};

export default function Work() {
  const worksList = [
    "HTML",
    "JavasScript",
    "React",
    "TypeScript",
    "CSS",
    "Redux",
    "Python",
    "Java",
    "C#",
    "HTML",
    "JavasScript",
    "React",
    "TypeScript",
    "CSS",
    "Redux",
    "Python",
    "Java",
    "C#",
  ];
  const files = [
    {
      title: "Slack developer",
      subtitle: "2020.09-2021.01",
      description: "Worked as a project manager",
      url: work1,
    },
    {
      title: "Slack developer",
      subtitle: "2020.09-2021.01",
      description: "Worked as a project manager",
      url: work2,
    },
    {
      title: "Slack developer",
      subtitle: "2020.09-2021.01",
      description: "Worked as a project manager",
      url: work3,
    },
    {
      title: "Slack developer",
      subtitle: "2020.09-2021.01",
      description: "Worked as a project manager",
      url: work1,
    },
    {
      title: "Slack developer",
      subtitle: "2020.09-2021.01",
      description: "Worked as a project manager",
      url: work2,
    },
    {
      title: "Slack developer",
      subtitle: "2020.09-2021.01",
      description: "Worked as a project manager",
      url: work3,
    },
  ];
  return (
    <section className="workContainer">
      <div className="contents">
        <h4>{`RECENT WORK & MY SKILLS`}</h4>
        <ul className="worksList">{worksList.map((work, index) => workCard(work, index))}</ul>
        <ul>{files.map((file, index) => imageCard(file, index))}</ul>
      </div>
    </section>
  );
}
