import React from "react";
import { Link } from "react-router-dom";
function Header() {
  // const categories = [
  //   {
  //     name: "About Me",
  //     description: " ",
  //   },
  //   {
  //     name: "Portfolio",
  //     description: "Apps",
  //   },
  //   {
  //     name: "Resume",
  //     description: "Amazing Resume",
  //   },
  // ];

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">Kim Mulligan</a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={`mx-2 `}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={`mx-2 `}>
            <Link to="/">About</Link>
          </li>
          <li className={`mx-2 `}>
            <Link to="/resume">Resume</Link>
          </li>
          <li className={`mx-2 `}>
            <Link to="/portfolio">Portfolio</Link>
          </li>

          {/* {categories.map((category) => (
              <li
                className={`mx-1 ${
                  currentCategory.name === category.name && 'navActive'
                }`}
                key={category.name}
              >
                <span
                  onClick={() => props.handlePageChange(category) */}
          {/* // setCurrentCategory(category);
                    // setContactSelected(false);
                  }
                >
                  {(category.name)}
                </span>
              </li>
            ))} */}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
