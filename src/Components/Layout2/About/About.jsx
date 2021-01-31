import React from "react";

const sampleContent = `Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website. Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website. Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website. Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website. Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website.`;

export default function About() {
  return (
    <section className="aboutContainer">
      <div className="contents">
        <h4>ABOUT ME</h4>
        <p>{sampleContent}</p>
      </div>
    </section>
  );
}
