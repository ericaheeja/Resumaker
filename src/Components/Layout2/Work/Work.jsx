import React from "react";
import { Image } from "antd";
import work1 from "../../../Assets/layout2/work1.jpg";
import work2 from "../../../Assets/layout2/work2.jpg";
import work3 from "../../../Assets/layout2/work3.jpg";

const imageCard = (file) => {
  return (
    <div className="imageCard">
      <div className="imgWrapper">
        <Image src={file.url} width={"100%"} height={"100%"} />
      </div>
      <p className="title">{file.title}</p>
      <p className="subtitle">{file.subtitle}</p>
      <p className="description"> {file.description}</p>
    </div>
  );
};

export default function Work() {
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
  ];
  return (
    <section className="workContainer">
      <div className="contents">
        <h4>RECENT WORK</h4>
        {files.map((file) => imageCard(file))}
      </div>
    </section>
  );
}
