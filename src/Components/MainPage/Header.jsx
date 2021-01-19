import React, { useState } from "react";
import Button from "../commonComponents/Button";
import { Grid, Menu } from "semantic-ui-react";
import { getKeyThenIncreaseKey } from "antd/lib/message";
import { useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import Logout from "./Logout";
import UserPage from "../UserPage/UserPage";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeItem, setActiveItem] = useState("Overview");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const islogged = useSelector((state) => state.isLogged);
  console.log(islogged);

  return (
    <div className="MainHeader">
      <Grid columns="equal">
        <Grid.Column floated="left" verticalAlign="middle">
          <div>
            <h2 className="logo">RESUMAKER</h2>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" textAlign="right" verticalAlign="middle">
          {islogged == null ? (
            <LoginModal />
          ) : (
            <div>
              <Link to="/mypage">My page</Link>
              <Logout />
            </div>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
}
