import React from "react";
import {Card, Image} from "semantic-ui-react";
import bookito from "../../../Assets/bookito.png";

export default function Portfolio() {
  return (
    <section className="PortfolioContainer" id="PORTFOLIO">
      <h2>Portfolio</h2>
      <Card>
        <Image src={bookito}/>
        <Card.Content>
          <Card.Header>Bookito</Card.Header>
          <Card.Meta>2020-12-29 - Present</Card.Meta>
          <Card.Description>
            Bookito is an app that helps users to find beauticians easily.
          </Card.Description>
        </Card.Content>
      </Card>
    </section>
  );
}
