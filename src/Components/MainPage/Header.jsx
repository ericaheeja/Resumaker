import React, { useState } from "react";
import { Grid, Segment, Button, Menu } from "semantic-ui-react";

export default function Header() {
  const [activeItem, setActiveItem] = useState("closest");

  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <div className="MainHeader">
      <Grid columns="equal">
        <Grid.Column floated="left" verticalAlign="middle">
          <div>
            <h2>RESUMAKER</h2>
          </div>
        </Grid.Column>
        <Grid.Column>
          <Menu text>
            <Menu.Item name="closest" active={activeItem === "closest"} onClick={handleItemClick} />
            <Menu.Item
              name="mostComments"
              active={activeItem === "mostComments"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="mostPopular"
              active={activeItem === "mostPopular"}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column floated="right" textAlign="right" verticalAlign="middle">
          <Button>Sign In</Button>
        </Grid.Column>
      </Grid>
    </div>
  );
}
