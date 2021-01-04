import React, { useState } from "react";
import { Menu, Segment, Button } from "semantic-ui-react";
import Header from "./Header";

export default function MainPage() {
  const [activeItem, setActiveItem] = useState("closest");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return <Header />;
}
