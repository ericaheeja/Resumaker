import React, { useState } from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import { Button } from "antd";
import sampleMe from "../../../Assets/sample.jpg";

export default function EditAbout() {
  const [numOfColumns, setNumOfColumns] = useState(getInitialNumOfColumns());

  function getInitialNumOfColumns() {
    let initialNumOfColumns = window.innerWidth < 1024 ? 1 : 2;
    return initialNumOfColumns;
  }

  const resizeScreen = () => {
    window.innerWidth >= 1024 ? setNumOfColumns(2) : setNumOfColumns(1);
  };

  window.addEventListener("resize", resizeScreen);

  return (
    <section className="AboutContainer" id="ABOUT">
      <h2 className="aboutMeTitle">About Me</h2>
      <div className="aboutMeContents">
        <Grid columns={numOfColumns} padded="horizontally">
          <Grid.Column>
            <Image id="aboutMeImage" src={sampleMe} />
          </Grid.Column>
          <Grid.Column>
            <Card.Content className="textBox">
              <p className="contents">
                If you do not believe you can do it then you have no chance at all. I am a super
                talented react developer. Please hire me, if you don't, you must regret. Do not miss
                me, I am the person who make your company bigger.
              </p>
              <div className="buttons">
                <Button>HIRE ME</Button>
                <Button>DOWNLOAD CV</Button>
              </div>
            </Card.Content>
          </Grid.Column>
        </Grid>
      </div>
    </section>
  );
}
