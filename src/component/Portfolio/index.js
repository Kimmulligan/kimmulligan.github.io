import React, { useState } from 'react';

function Portfolio({currentCategory}) {
  const { name, description } = currentCategory;
  const [photos] = useState([
    {
      name: "Grocery aisle",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Grocery booth",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Building exterior",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Restaurant table",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cafe interior",
      category: "commercial",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Cat green eyes",
      category: "portraits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ])
  return (
    <section>
      <h1 data-testid='h1tag'>{(name)}</h1>
      <p>{description}</p>
      <div className="flex-row">
        {photos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
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
   