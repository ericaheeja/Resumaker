import React from "react";
import { Card, Button, Image, Grid } from "semantic-ui-react";
import sampleMe from "../../../Assets/sample.jpg";

export default function About() {
  return (
    <section
      className="AboutContainer"
      id="ABOUT"
      style={{ marginTop: "10%", marginBottom: "10%" }}
    >
      <Grid columns={2} padded="horizontally">
        <Grid.Column>
          <Image src={sampleMe} />
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
