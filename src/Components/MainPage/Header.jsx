import React, { useState } from "react";
import Button from "../commonComponents/Button";
import { Grid, Menu } from "semantic-ui-react";

export default function Header() {
  const [activeItem, setActiveItem] = useState("Overview");

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
          <Menu text className="MenuBar" widths={4}>
            <Menu.Item
              name="Overview"
              active={activeItem === "Overview"}
              onClick={handleItemClick}
            />
            <Menu.Item
              name="Portfolios"
              active={activeItem === "Portfolios"}
              onClick={handleItemClick}
            />
            <Menu.Item name="Samples" active={activeItem === "Samples"} onClick={handleItemClick} />
            <Menu.Item name="Pricing" active={activeItem === "Pricing"} onClick={handleItemClick} />
          </Menu>
        </Grid.Column>
        <Grid.Column floated="right" textAlign="right" verticalAlign="middle">
          <Button text={"Sign In"} onClick={null} />
        </Grid.Column>
      </Grid>
    </div>
  );
}
