import React, { useState } from "react";
import { Card, Button, Image, Grid } from "semantic-ui-react";
import sampleMe from "../../../Assets/sample.jpg";

let initialNumOfColumns;

const getInitialNumOfColumns = () => {
  window.innerWidth < 1024 ? (initialNumOfColumns = 1) : (initialNumOfColumns = 2);
  return initialNumOfColumns;
};

export default function About() {
  const [numOfColumns, setNumOfColumns] = useState(getInitialNumOfColumns());

  const resizeScreen = () => {
    window.innerWidth >= 1024 ? setNumOfColumns(2) : setNumOfColumns(1);
  };

  window.addEventListener("resize", resizeScreen);

  return (
    <section
      className="AboutContainer"
      id="ABOUT"
      style={{ marginTop: "10%", marginBottom: "10%" }}
    >
      <Grid columns={numOfColumns} padded="horizontally">
        <Grid.Column>
          <Image id="aboutMeImage" src={sampleMe} />
        </Grid.Column>
        <Grid.Column>
          <Card.Content className="textBox">
            <p className="aboutMe">
              About <strong style={{ color: "#bac964", fontStyle: "bold" }}>Me</strong>
            </p>
            <p className="contents">
              If you do not believe you can do it then you have no chance at all. I am a super
              talented react developer. Please hire me, if you don't, you must regret. Do not miss
              me, I am the person who make your company bigger.
            </p>
            <div className="buttons">
              <Button primary>HIRE ME</Button>
              <Button secondary>DOWNLOAD CV</Button>
            </div>
          </Card.Content>
        </Grid.Column>
      </Grid>
    </section>
  );
}
