import React from "react";
import Button from "../commonComponents/Button";

export default function Landing() {
  // const title = `Beautiful portfolio websites
  // Create your own for free.`;
  const title = `Make your dreams come true with Resumaker`;
  const subtitle = `We provides your own link to access your product.`;

  return (
    <div className="Landing">
      <div className="content">
        <h1>{title}</h1>
        {/* <p>{subtitle}</p> */}
        <Button text={"Get Started Free"} />
      </div>
    </div>
  );
}
