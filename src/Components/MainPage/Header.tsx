import React, { useState } from "react";
import { Grid, Menu } from "semantic-ui-react";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import {LoginModal} from "./LoginModal";
import {Logout} from "./Logout";
import { Link } from "react-router-dom";
import { RootState } from "../../Redux";

export const Header : React.FC = () => {
  // const [activeItem, setActiveItem] = useState<String>("Overview");
  // const handleItemClick = (e, { name }) => setActiveItem(name);
  const islogged = useSelector((state: RootState) => state.isLogged);
  console.log(islogged);
  return (
    <div className="MainHeader">
      <Grid columns="equal">
        <Grid.Column floated="left" verticalAlign="middle">
          <div>
            <Link to="/">
              <h2 className="logo">RESUMAKER</h2>
            </Link>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" textAlign="right" verticalAlign="middle">
          {islogged === null ? (
            <LoginModal />
          ) : (
            <div className="rightSideHeader">
              <Link to="/mypage">
                <section style={{ fontSize: "20px" }}>
                  <UserOutlined style={{ color: "black", cursor: "pointer" }} />
                </section>
              </Link>
              <Logout />
            </div>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
}
