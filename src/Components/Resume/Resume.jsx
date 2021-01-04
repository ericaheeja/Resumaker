import React from "react";
import { Card, Grid } from "semantic-ui-react";

const experiences = [
  {
    title: "bookito",
    position: "project manager",
    period: "Jul, 1, 2020 - present",
    description:
      "Rick is a genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his family.",
  },
  {
    title: "Ssenkkochi",
    position: "Server",
    period: "Jul, 1, 2020 - present",
    description:
      "Rick is a genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his family.",
  },
  {
    title: "hahahaSchool",
    position: "assistant",
    period: "Jul, 1, 2020 - present",
    description:
      "Rick is a genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his family.",
  },
];

const educations = [
  {
    school: "BCIT",
    major: "CST",
    period: "2019.01 ~ present",
    description:
      "Rick is a genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his family.",
  },
  {
    school: "SKKU",
    major: "Statistics",
    period: "2009.02 ~ 2014.06",
    description:
      "Rick is a genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his family.",
  },
  {
    school: "HightScchoclllas",
    major: "how to be a gentleman",
    period: "2009.02 ~ 2014.06",
    description:
      "Rick is a genius scientist whose alcoholism and reckless, nihilistic behavior are a source of concern for his family.",
  },
];

const experienceCard = (experience) => {
  return (
    <div className="experienceCard" key={experience.title}>
      <span className="period">{experience.period}</span>
      <h3 className="title">{experience.title}</h3>
      <span className="position">{experience.position}</span>
      <p className="description">{experience.description}</p>
    </div>
  );
};

const educationsCard = (education) => {
  return (
    <div className="experienceCard" key={education.school}>
      <span className="period">{education.period}</span>
      <h3 className="title">{education.school}</h3>
      <span className="position">{education.major}</span>
      <p className="description">{education.description}</p>
    </div>
  );
};

export default function Resume() {
  return (
    <section id="RESUME" className="resumeContainer">
      <div className="title">
        <h1>RESUME</h1>
      </div>

      <Grid columns={2} padded="horizontally">
        <Grid.Column>
          <h2 className="subTitle">Education</h2>
          {experiences.map((experience) => {
            return experienceCard(experience);
          })}
        </Grid.Column>
        <Grid.Column>
          <h2 className="subTitle">Experience</h2>
          {educations.map((education) => {
            return educationsCard(education);
          })}
        </Grid.Column>
      </Grid>
    </section>
  );
}
