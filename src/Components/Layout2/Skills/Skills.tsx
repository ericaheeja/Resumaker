import React from "react";
import { List, Avatar } from "antd";
import jsImg from "../../../Assets/layout2/javascript.png";

interface dataType {
  title : string,
  description : string[],
}

const data: dataType[] = [
  {
    title: "JavaScript",
    description: [
      "ES2015 이후의 자바스크립트 문법 사용에 익숙합니다.",
      "상황에 따라 적절한 자료구조를 사용합니다.",
      "Promise 또는 Async / Await을 사용해 비동기처리를 하는데 익숙합니다.",
      "정적타입으로써 개발이 필요할 시, TypeScript을 사용 할 수 있습니다. ",
    ],
  },
  {
    title: "React",
    description: [
      "React hooks(useState, useSelecter, useRef, useEffect, useContext 등등)의 사용에 익숙합니다.",
      "Redux 을 이용해 데이터를 관리합니다. ",
      "자주 사용하게 되는 UI들을 별도의 컴포넌트로 만들어서, 컴포넌트를 재활용하는데 익숙합니다.",
      "다양한 패키지들을 이용해본 경험이 있어, 넓은 리액트 생태계에 있는 패키지들을 사용하는데 익숙합니다.",
    ],
  },
  {
    title: "HTML / CSS",
    description: [
      "SASS / SCSS 사용에 대한 경험이 있고, SCSS 문법에 익숙합니다.",
      "반응형 디자인에 대한 경험이 있고, Bootstrap 등의 템플릿을 이용하지 않고도 반응형 디자인을 제작할 수 있습니다.",
      "AntDesign, Bootstrap, Semantic UI 등 다양한 CSS 프레임워크들에 대한 사용경험이 있고, 또 상황에 맞게 그것들을 수정하여 사용하는데 익숙합니다.",
    ],
  },
  {
    title: "Development tools",
    description: [
      "Git, Jira, Trello 등 협업툴을 사용하는 데에 익숙합니다.",
      "Firebase가 제공하는 FireStore, Realtime Database, Storage 그리고 extension들의 사용에 대한 경험이 있고 익숙합니다.",
      "NoSQL database 을 사용함에 있어서 나타날 수 있는 데이터중복에 대해서 깊은 고민을 해봤고 그 단점을 최소화 하려고 합니다.",
    ],
  },
  {
    title: "Overall",
    description: [
      "협업의 힘을 믿습니다. 좋은 결과물이 나오기 위해서는 활발한 의사소통과 그에 따른 피드백이 필요하다고 생각합니다.",
      "따라서, 내가 리더라면 그러한 환경을 만들기 위해 노력을 해야하고, 내가 구성원이라면 내 능력만큼 다른 사람과 함께 작업할 수 있는 능력도 길러야 한다고 생각합니다.",
      "어떠한 기술도 모든 상황에 완전히 적합하고 옳다라고 생각하지 않습니다. 사용될 기술은 항상 상황에 따라 적절히 선택이 되어야 한다고 믿습니다.",
      "꼭 능숙한 분야가 아니더라도 새로운 분야를 적극적으로 탐색하여 만족할 수 있는 결과물을 낼 수 있도록 노력합니다.",
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="skillsContainer">
      <div className="contents">
        <h5>MY SPECIALTY</h5>
        <h4 className="subtitle">MY SKILLS</h4>

        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={jsImg} />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={
                  <ul>
                    {item.description.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </section>
  );
}
