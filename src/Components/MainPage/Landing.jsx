import React from "react";
import Button from "../commonComponents/Button";

export default function Landing() {
  // const title = `Beautiful portfolio websites
  // Create your own for free.`;
  const title = `Make your dream comes true with Resumaker`;
  const subtitle = `We provides your own link to access your product.`;

  return (
    <div className="Landing">
      <div className="content">
        <h2>{title}</h2>
        {/* <p>{subtitle}</p> */}
        <Button text={"Get Started Free"} />
      </div>
    </div>
  );
}
