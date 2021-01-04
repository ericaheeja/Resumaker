import React, { useState } from "react";
import { Grid, Segment, Button, Menu } from "semantic-ui-react";

export default function Header() {
  const [activeItem, setActiveItem] = useState("closest");

  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <div>
      <Grid columns="equal">
        <Grid.Column>
          <h2>RESUMAKER</h2>
        </Grid.Column>
        <Grid.Column width={8}>
          <Menu text>
            <Menu.Item header>Sort By</Menu.Item>
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
        <Grid.Column>
          <Button>Sign In</Button>
        </Grid.Column>
      </Grid>
    </div>
  );
}
