import React, { useState } from "react";

import { Grid, Segment, Menu } from "semantic-ui-react";

function Button(props) {
  const { text, onclick } = props;
  const style = {
    borderRadius: "27px",
    color: "##6d7784",
    border: "1px solid #e2e4e6",
    backgroundColor: "whitesmoke",
    padding: "10px 25px",
  };
  return (
    <button onclick={onclick} style={style}>
      {text}
    </button>
  );
}

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
          <Button text={"Sign In"} onclick={null} />
        </Grid.Column>
      </Grid>
    </div>
  );
}
