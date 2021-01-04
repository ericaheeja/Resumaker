import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Segment, Button, Menu } from "semantic-ui-react";
import MainLayout1 from "../Layout1/MainLayout1";

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
        <Link to="/layout1"><Button>sample</Button></Link>
    </div>
  );
}
