import "./App.css";
import Header from "./component/Header";
import React, { useState } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio"

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: "About Me", description: " ",
    },
    { 
      name: "Portfolio", description: "Apps" 
    },
    { 
      name: "Resume", description: "Amazing Resume" 
    },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Header>
      <main>
         {!contactSelected ? (
           <>
          <Portfolio></Portfolio>
          <About></About>
          </>
         ) : (
          <Contact></Contact>
         )} 
         {/* {!aboutSelected ? (
           <> 
           <Contact></Contact>
          <Portfolio></Portfolio>
          </>
          <About></About>
         
         ) : (
         
         )} 
         */}
      </main>
    </div>
  );
}
export default App;
