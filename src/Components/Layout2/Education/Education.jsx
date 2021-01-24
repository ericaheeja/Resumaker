import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

export default function Education() {
  const educations = [
    "Entered SKKU at 2009-02",
    "Entered SKKU at 2009-02",
    "Entered SKKU at 2009-02",
    "Entered SKKU at 2009-02",
    "Entered SKKU at 2009-02",
    "Entered SKKU at 2009-02",
  ];

  return (
    <section className="educationContainer">
      <div className="contents">
        <h4>Education</h4>
        <Timeline mode="alternate" className="timeLine">
          {educations.map((education) => (
            <Timeline.Item>{education}</Timeline.Item>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
