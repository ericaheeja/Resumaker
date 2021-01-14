import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import MainLayout1 from "./Components/Layout1/MainLayout1";
import EditMainLayout1 from "./Components/EditLayout1/EditMainLayout1";
import Layout2 from "./Components/Layout2/Layout2";
import MainPage from "./Components/MainPage/MainPage";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/layout1" component={MainLayout1} />
      <Route path="/layout2" component={Layout2} />
      <Route path="/editLayout1" component={EditMainLayout1} />
    </Router>
  );
}
