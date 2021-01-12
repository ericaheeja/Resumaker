import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import bookitojpg from "../../../Assets/bookito.jpg";
import resumakerpng from "../../../Assets/resumaker.png";
import mepng from "../../../Assets/me.png";

const portfolio = [
  {
    image: bookitojpg,
    name: "Bookito",
    period: "December 2020 - Present",
    description: "Bookito is an app that helps users to find beauticians easily.",
  },
  {
    image: resumakerpng,
    name: "Resumaker",
    period: "March 2019 - May 2020",
    description: "Resumaker is a website that provide people free templates.",
  },
  {
    image: mepng,
    name: "Random project",
    period: "Apr 2018 - October 2019",
    description: "Random project that shows as a sample project.",
  },
];

const portfolioCard = (project, index) => {
  return (
    <Card key={index}>
      <Image src={project.image} height="280px" />
      <Card.Content>
        <Card.Header>{project.name}</Card.Header>
        <Card.Meta>{project.period}</Card.Meta>
        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default function Portfolio() {
  return (
    <section className="PortfolioContainer" id="PORTFOLIO">
      <h2 className="portfolioTitle">PORTFOLIO</h2>
      <div className="portfolios">
        <Grid columns={3} textAlign="center">
          {portfolio.map((project, index) => {
            return portfolioCard(project, index);
          })}
        </Grid>
      </div>
    </section>
  );
}
