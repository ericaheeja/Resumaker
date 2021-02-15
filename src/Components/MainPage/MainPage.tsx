import React from "react";
import { Grid, Image, Card, Icon } from "semantic-ui-react";
import { Header } from "./Header";
import {Landing} from "./Landing";
import { Link } from "react-router-dom";
import {Samples} from "./Samples";
import dog from "../../Assets/me.png";
import layout2Cover from "../../Assets/layout2/layout2.jpeg";

export const MainPage:React.FC = () => {
  return (
    <div className="MainPage">
      <Header />
      <Landing />
      <Samples />
      <div className="layoutList">
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              {" "}
              <Link to="/l1">
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
              <Link to="/l2">
                <Card centered>
                  <Image src={layout2Cover} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Layout2</Card.Header>
                    <Card.Description>Made by Jce</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name="heart" />
                    32 Used
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>
            <Grid.Column>
              {" "}
              <Link to="/l1">
                <Card centered>
                  <Image src={dog} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>Layout3</Card.Header>
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
