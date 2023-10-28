import React from "react";

function About({ aboutText, aboutImage }) {
  return (
    <aside>
      <img src={aboutImage} alt="blog logo" />
      <p>{aboutText}</p> {}
    </aside>
  );
}

export default About;
