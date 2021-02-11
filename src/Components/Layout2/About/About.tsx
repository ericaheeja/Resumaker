import React from "react";

const sampleContent = `Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website. Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website. Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website. Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website. Hello! I am a junior front-end developer from Vancouver. I have over 2 years of experience in startups and big progjects like this website.`;

export const About: React.FC = () => {
  return (
    <section id="about" className="aboutContainer">
      <div className="contents">
        <h5>ABOUT ME</h5>
        <h4>Who AM I ?</h4>
        <p>{sampleContent}</p>
      </div>
    </section>
  );
}
