import React from "react";
import EditHome from "./EditHome/EditHome";
import EditPortfolio from "./EditPortfolio/EditPortfolio";
import EditResume from "./EditResume/EditResume";
import EditAbout from "./EditAbout/EditAbout";
import EditSkills from "./EditSkills/EditSkills";

export default function EditMainLayout1() {
  return (
    <div className="MainLayout1">
      <EditHome />
      <EditPortfolio />
      <EditResume />
      <EditAbout />
      <EditSkills />
    </div>
  );
}
