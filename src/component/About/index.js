import coverImage from "../../assets/Kim Mulligan 21620-9479.jpg";

import React from "react";

function About() {
  return (
    <section className="my-5">
      <h1 id="about"> Kim Mulligan </h1>
      <p>Kim is a photography professional and a coding student!</p>
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover"/>
    </section>
  );
}

export default About;