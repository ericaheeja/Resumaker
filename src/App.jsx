import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import MainPage from "./Components/MainPage/MainPage";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
    </Router>
  );
}
