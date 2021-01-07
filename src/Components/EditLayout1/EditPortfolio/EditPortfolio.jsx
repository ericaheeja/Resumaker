import React, { useState, useRef } from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import { Input, Button, Form } from "antd";
import bookitojpg from "../../../Assets/bookito.jpg";
import resumakerpng from "../../../Assets/resumaker.png";
import mepng from "../../../Assets/me.png";

// const portfolio = [
//   {
//     image: bookitojpg,
//     name: "Bookito",
//     period: "December 2020 - Present",
//     description: "Bookito is an app that helps users to find beauticians easily.",
//   },
//   {
//     image: resumakerpng,
//     name: "Resumaker",
//     period: "March 2019 - May 2020",
//     description: "Resumaker is a website that provide people free templates.",
//   },
//   {
//     image: mepng,
//     name: "Random project",
//     period: "Apr 2018 - October 2019",
//     description: "Random project that shows as a sample project.",
//   },
// ];

const portfolioForm = (portfolios, setPortfolios) => {
  const addPortfolio = (value) => {
    const newPortfolio = {
      img: bookitojpg,
      name: value.name,
      period: value.period,
      description: value.description,
    };

    const newPortfolios = [...portfolios, newPortfolio];
    setPortfolios(newPortfolios);
  };

  return (
    <Card>
      <Form className="portfolioForm" onFinish={addPortfolio}>
        <Form.Item name="img">
          <Image src={bookitojpg} height="280px" />
        </Form.Item>
        <Card.Content>
          <Card.Header>
            <Form.Item label="portfolioName" name="name" className="portfolioName">
              <Input className="portfolioName" type="name" />
            </Form.Item>
          </Card.Header>
          <Card.Meta>
            <Form.Item label="portfolioPeriod" name="period" className="portfolioPeriod">
              <Input className="portfolioPeriod" type="period" />
            </Form.Item>
          </Card.Meta>
          <Card.Description>
            <Form.Item
              label="portfolioDescription"
              name="description"
              className="portfolioDescription"
            >
              <Input className="portfolioDescription" type="description" />
            </Form.Item>
          </Card.Description>
        </Card.Content>
        <Button className="saveBtn" htmlType="submit">
          Save
        </Button>
      </Form>
    </Card>
  );
};

export default function EditPortfolio() {
  const [portfolios, setPortfolios] = useState([]);

  const portfolioCard = (project) => {
    const removePortfolio = (portfolio) => {
      const updatedPortfolio = portfolios.filter((e) => e.name !== project.name);
      setPortfolios(updatedPortfolio);
    };

    return (
      <Card key={project.name}>
        <Image src={bookitojpg} height="280px" />
        <Card.Content>
          <Card.Header>{project.name}</Card.Header>
          <Card.Meta>{project.period}</Card.Meta>
          <Card.Description>{project.description}</Card.Description>
        </Card.Content>
        <button className="removeBtn" onClick={() => removePortfolio(project.name)}>
          Remove
        </button>
      </Card>
    );
  };

  return (
    <section className="PortfolioContainer" id="PORTFOLIO">
      <h2 className="portfolioTitle">PORTFOLIO</h2>
      <div className="portfolios">
        <Grid columns={3} textAlign="center">
          {portfolios.map((project) => {
            return portfolioCard(project);
          })}
          {portfolioForm(portfolios, setPortfolios)}
        </Grid>
      </div>
    </section>
  );
}
