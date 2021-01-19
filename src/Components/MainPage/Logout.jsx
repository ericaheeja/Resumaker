import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { firebaseAuth } from "../../Config/firebase";
import { logout } from "../../Actions";
import { Button } from "semantic-ui-react";

export default function Logout() {
  //   const [login, setLogin] = useState(true);
  const dispatch = useDispatch();

  const loggedOut = () => {
    firebaseAuth.signOut().then(function () {
      dispatch(logout(null));
    });
  };

  return (
    <div>
      <Button onClick={loggedOut}>Logout</Button>
    </div>
  );
}
