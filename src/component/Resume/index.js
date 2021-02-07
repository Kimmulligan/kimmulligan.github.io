import coverImage from "../../assets/Kim Mulligan 21620-9479.jpg";

import React from "react";

function Resume() {
  return (
    <section className="my-5">
      {/* <h1 id="resume"> Kim Mulligan </h1> */}
      <div>
      <p>Learn more about Kim on Linkedin!</p>
      </div> 
      <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover"/>
      <div>
      <a href="https://www.linkedin.com/in/kim-mulligan"> Kim's Linkedin
      </a>
      
      </div>
    
    </section>
  );
}

export default Resume;