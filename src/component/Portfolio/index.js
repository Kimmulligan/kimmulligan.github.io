import React, { useState } from 'react';

function Portfolio({ category }) {
 //const { name, description } = currentProject;
  const [projects] = useState([
    {
      name: "Wantings",
      description: "JavaScript-CSS-HTML5-MYSQL-Handlebars-Bootstrap",
      gitHubUrl:"https://github.com/rawagschal/wantings",
      deployedUrl: "https://warm-crag-68291.herokuapp.com/"
    },
    {
      name: "Spaced-Out",
      description: "JavaScript-CSS-HTML-Bootstrap",
      gitHubUrl:"https://github.com/rawagschal/spaced-out",
      deployedUrl: "https://rawagschal.github.io/spaced-out/"
    },
    {
      name: "Weather",
      description: "JavaScript-CSS-HTML5-jQuery",
      gitHubUrl:"https://github.com/Kimmulligan/weather",
      deployedUrl:"https://kimmulligan.github.io/weather/"
    },
    {
      name: "Note Taker",
      description: "CSS-HTML-Express.js",
      gitHubUrl: "https://github.com/Kimmulligan/note-taker",
      deployedUrl: "https://note-taker-kim.herokuapp.com/"
    },
    {
      name: "Scheduler",
      description: "JavaScript-CSS-HTML-JQuery-moment.js",
      gitHubUrl: 'https://github.com/Kimmulligan/scheduler',
      deployedUrl: 'https://kimmulligan.github.io/scheduler/'
    },
    {
      name: "Doctor Who Quiz",
      description: "JavaScript-CSS-HTML",
      gitHubUrl: 'https://github.com/Kimmulligan/timed-quiz',
      deployedUrl: "https://kimmulligan.github.io/timed-quiz/"
    },
    
  ])
  return (
    <section>
      <div>
      <h1>{projects.name}</h1>
      <p>{projects.description}</p>
      </div>
      <div className="flex-row">
        {projects.map((image, i) => (
          <img
            src={require(`../../assets/projectImgs/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
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
   