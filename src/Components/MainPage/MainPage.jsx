import React from "react";
import { Grid, Image, Card, Icon } from "semantic-ui-react";
import Header from "./Header";
import Landing from "./Landing";
import { Link } from "react-router-dom";
import Samples from "./Samples";
import dog from "../../Assets/me.png";

export default function MainPage() {
  return (
    <div className="MainPage">
      <Header />
      <Landing />
      <Samples />
      <div style={{ backgroundColor: "#FFF", marginTop: "-5%" }}>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              {" "}
              <Link to="/layout1">
                <Card centered>
                  <Image src={dog} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Layout1</Card.Header>
                    <Card.Description>Made by Erica</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name="heart" />
                    22 Used
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>

            <Grid.Column>
              {" "}
              <Link to="/layout1">
                <Card centered>
                  <Image src={dog} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Layout1</Card.Header>
                    <Card.Description>Made by Erica</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name="heart" />
                    22 Used
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>
            <Grid.Column>
              {" "}
              <Link to="/layout1">
                <Card centered>
                  <Image src={dog} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Layout1</Card.Header>
                    <Card.Description>Made by Erica</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name="heart" />
                    22 Used
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
