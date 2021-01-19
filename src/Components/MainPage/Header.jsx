import React, { useState } from "react";
import Button from "../commonComponents/Button";
import { Grid, Menu } from "semantic-ui-react";
import { getKeyThenIncreaseKey } from "antd/lib/message";
import LoginModal from "./LoginModal";

export default function Header() {
  const [activeItem, setActiveItem] = useState("Overview");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div className="MainHeader">
      <Grid columns="equal">
        <Grid.Column floated="left" verticalAlign="middle">
          <div>
            <h2 className="logo">RESUMAKER</h2>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" textAlign="right" verticalAlign="middle">
          {/* <button onClick={signInWithGoogle}>signIn</button> */}
          <LoginModal />
        </Grid.Column>
      </Grid>
    </div>
  );
}
