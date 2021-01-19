import React, { useState } from "react";
import Button from "../commonComponents/Button";
import { Grid, Menu } from "semantic-ui-react";
import { firebaseAuth } from "../../Config/firebase";
import { getKeyThenIncreaseKey } from "antd/lib/message";
import firebase from "firebase/app";
import { generateUserDocument } from "../../Helpers/authentication";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../Actions";

export default function Header() {
  const [activeItem, setActiveItem] = useState("Overview");

  const [currentUser, setCurrentUser] = useState(null);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const islogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    firebaseAuth.signInWithPopup(googleProvider).then(function (result) {
      generateUserDocument(result.user).then(function (userData) {
        console.log(currentUser);
        dispatch(login(userData));
        setCurrentUser(islogged);
      });
    });
  };

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
          <button onClick={signInWithGoogle}>signIn</button>
        </Grid.Column>
      </Grid>
    </div>
  );
}
