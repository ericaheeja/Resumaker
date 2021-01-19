import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import googleIcon from "../../Assets/googleIcon.jpg";
import facebookIcon from "../../Assets/fbIcon.png";
import firebase from "firebase/app";
import { firebaseAuth } from "../../Config/firebase";
import { generateUserDocument } from "../../Helpers/authentication";
import { useSelector, useDispatch } from "react-redux";
import { googleLogin, facebookLogin } from "../../Actions";
import { useHistory } from "react-router-dom";

function LoginModal() {
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  const islogged = useSelector((state) => state.isLogged);
  console.log(islogged);

  const dispatch = useDispatch();
  const history = useHistory();

  const goBackToHome = () => {
    setOpen(!open);
    history.push("/");
  };

  const signInWithGoogle = () => {
    firebaseAuth.signInWithPopup(googleProvider).then(function (result) {
      generateUserDocument(result.user).then(function (userData) {
        // console.log(currentUser);
        dispatch(googleLogin(userData));
        setCurrentUser(islogged);
        goBackToHome();
      });
    });
  };

  const signInWithFacebook = () => {
    firebaseAuth.signInWithPopup(facebookProvider).then(function (result) {
      generateUserDocument(result.user).then(function (userData) {
        dispatch(facebookLogin(userData));
        goBackToHome();
      });
    });
  };

  // const isloggedIn = () => {
  //   const islogged = useSelector((state) => state.isLogged);
  //   console.log(islogged);
  // }

  return (
    <div>
      <Modal
        className="loginModal"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Login</Button>}
      >
        <Modal.Header>
          Login with{" "}
          <Button color="$white" floated="right" onClick={() => setOpen(false)}>
            X
          </Button>
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Choose one of your social media account.</Header>
            <Button onClick={signInWithGoogle} className="googleLoginBtn">
              <img src={googleIcon} className="googleLogo" alt="googleLogo" />
              <div className="googleLoginText">Sign in with Google</div>
            </Button>
            <Button onClick={signInWithFacebook} className="fbLoginBtn">
              <img src={facebookIcon} className="facebookLogo" alt="facebookLogo" />
              <div className="facebookLoginText">Sign in with Facebook</div>
            </Button>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions></Modal.Actions>
      </Modal>
    </div>
  );
}

export default LoginModal;
