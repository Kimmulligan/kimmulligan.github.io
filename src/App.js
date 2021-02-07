import "./App.css";
import Header from "./component/Header";
import React, { useState } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  // const [aboutSelected, setAboutSelected] = useState(false);
  const renderPage = () => {
    switch (setCurrentCategory) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
        // case 'Resume':
        // return <Resume />;
      default:
        return <About />;
    }
  };

  // const [categories] = useState([
  //   {
  //     name: "About Me", description: " ",
  //   },
  //   { 
  //     name: "Portfolio", description: "Apps" 
  //   },
  //   { 
  //     name: "Resume", description: "Amazing Resume" 
  //   },
  // ]);
  // const [currentCategory, handlePageChange] = useState(categories[0]);
  const [currentCategory, setCurrentCategory] = useState();
  return (
    <Router>
    <div>
      <Header
        // categories={categories}
        // // setCurrentCategory={setCurrentCategory}
        // currentCategory={currentCategory}
        // // contactSelected={contactSelected}
        // // setContactSelected={setContactSelected}
        // // aboutSelected={aboutSelected}
        // // setAboutSelected={setAboutSelected}
        // handlePageChange={handlePageChange}
      ></Header>
      <main>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/resume" component={Resume} /> */}

          
         {/* {!contactSelected ? (
           <>
          <Portfolio></Portfolio>
          <About></About>
          </>
         ) : (
          <Contact></Contact>
         )} 
         {!aboutSelected ? (
           <> 
         
          </>
        
         
         ) : (
          <About></About>
         )}  */}
         {/* <Header currentCategory={currentCategory} handlePageChange={handlePageChange} /> */}
   <div>{renderPage(currentCategory)}</div>

      </Switch>  
      </main>
      
    </div>
    </Router>
  );
}
export default App;
