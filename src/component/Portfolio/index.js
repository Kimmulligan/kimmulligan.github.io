import React, { useState } from "react";

function Portfolio({ category }) {
  //const { name, description } = currentProject;
  const [projects] = useState([
    {
      name: "Wantings",
      description: "JavaScript-CSS-HTML5-MYSQL-Handlebars-Bootstrap",
      gitHubUrl: "https://github.com/rawagschal/wantings",
      deployedUrl: "https://warm-crag-68291.herokuapp.com/",
    },
    {
      name: "Spaced-Out",
      description: "JavaScript-CSS-HTML-Bootstrap",
      gitHubUrl: "https://github.com/rawagschal/spaced-out",
      deployedUrl: "https://rawagschal.github.io/spaced-out/",
    },
    {
      name: "A Petter Life",
      description: "JavaScript-CSS-HTML5-React-GraphQL-ApolloServer",
      gitHubUrl: "https://github.com/ChrisMeissner/petter-life",
      deployedUrl: "https://a-petter-life.herokuapp.com/",
    },
    {
      name: "Doctor Who Quiz",
      description: "JavaScript-CSS-HTML",
      gitHubUrl: "https://github.com/Kimmulligan/timed-quiz",
      deployedUrl: "https://kimmulligan.github.io/timed-quiz/",
    },
    {
      name: "Work Day Scheduler",
      description: "JavaScript-CSS-HTML-JQuery-moment.js",
      gitHubUrl: "https://github.com/Kimmulligan/scheduler",
      deployedUrl: "https://kimmulligan.github.io/scheduler/",
    },
    {
      name: "Note Taker",
      description: "CSS-HTML-Express.js",
      gitHubUrl: "https://github.com/Kimmulligan/note-taker",
      deployedUrl: "https://note-taker-kim.herokuapp.com/",
    },
    {
      name: "Weather",
      description: "JavaScript-CSS-HTML5-jQuery",
      gitHubUrl: "https://github.com/Kimmulligan/weather",
      deployedUrl: "https://kimmulligan.github.io/weather/",
    },
  ]);
  // console.log(projects.name);
  return (
    <section>
      <div className="flex-row">
        {/* <div> */}
        <h1>{projects.name}</h1>
        <p>{projects.description}</p>

        {/* </div>
         */}
        {projects.map((image, i) => (
          <div key={image.name}>
            <img
              src={require(`../../assets/projectImgs/${i}.png`).default}
              alt={image.name}
              className="img-thumbnail mx-1"
            />
            <div style={{display: "block"}}>
            <a href={image.gitHubUrl} style={{display:"inline"}}>
              <p style={{display:"inline-block"}}>github</p>
            </a>
            <a href={image.deployedUrl} style={{display:"inline"}}>
              <p style={{display:"inline-block"}}>deployed</p>
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

// function  Gallery() {
//   const [currentCategory] = useState([
//     {
//       name:"commercial",
//       description:
//       "Photos of grocery stores, food trucks, and other commercial projects",
//     },
//     { name: "portraits", description: "Portraits of people in my life"},
//     {name:  "food", description: "Delicious delicacies"},
//     {
//       name: "landscape",
//       description: "Fields, farmhouses, waterfalls, and the beauty of nature",
//     },
//   ]);
//   const [currentCategory, setCurrentCategory] = useState(categories[0]);
//   return (
//     <div>
