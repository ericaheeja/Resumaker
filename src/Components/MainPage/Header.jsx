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
  console.log(islogged);

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
            <h2 className="logo">RESUMAKER</h2>
          </div>
        </Grid.Column>
        <Grid.Column floated="right" textAlign="right" verticalAlign="middle">
          <button onClick={signInWithGoogle}>signIn</button>
        </Grid.Column>
      </Grid>
    </div>
  );
}
