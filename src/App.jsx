import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import MainLayout1 from "./Components/Layout1/MainLayout1";
import MainPage from "./Components/MainPage/MainPage";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/layout1" component={MainLayout1} />
    </Router>
  );
}
