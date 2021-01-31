import React from "react";

export default function Button(props) {
  const { text, onclick } = props;
  const style = {
    borderRadius: "27px",
    color: "##6d7784",
    border: "1px solid #e2e4e6",
    backgroundColor: "whitesmoke",
    padding: "10px 25px",
  };
  return (
    <button className="resumakerBtn" onClick={onclick} style={style}>
      {text}
    </button>
  );
}
