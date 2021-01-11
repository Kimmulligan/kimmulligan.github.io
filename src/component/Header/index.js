import React from 'react';

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  return(
      <header className="flex-row px-1">
        <h2>
          <a href="/">
            Kim Mulligan
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            {categories.map((category) => (
              <li
                className={`mx-1 ${
                  currentCategory.name === category.name && !contactSelected  && 'navActive'
                }`}
                key={category.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category);
                    setContactSelected(false);
                  }}
                >
                  {(category.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
}
export default Header