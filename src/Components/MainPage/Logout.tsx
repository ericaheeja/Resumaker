import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../../Config/firebase";
import { logout } from "../../Redux/isLogged";
import { Button } from "semantic-ui-react";

export const Logout = () => {
  //   const [login, setLogin] = useState(true);
  const dispatch = useDispatch();

  const loggedOut = () => {
    firebaseAuth.signOut().then(function () {
      dispatch(logout());
    });
  };

  return (
    <div>
      <Button onClick={loggedOut}>Logout</Button>
    </div>
  );
}
