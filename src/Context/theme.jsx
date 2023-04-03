import React from "react";
import { useState, createContext } from "react";

import PropTypes from "prop-types";

// context object Themecontext created using the createContext function
// context is a way to pass data down component tree without passing props manually
const ThemeContext = createContext();

//takes an object with a single property 'children'
//special prop allows components to render child elements/compon passed between opening/closing tags 
// contains all child components that will be rendered
function ThemeProvider ({ children }) {

//hook used to define themename state variable, setthename function to update the state
// initial value of themename is light
  const [themename, setthemename] = useState("light");

  // function uses current value of state to determine whether to update to light/dark
  const toggeltheme = () => {
    // ternary operator which checks if state variable is currently equal to light
    // if true returns the value of dark
    themename === "light" ? setthemename("dark") : setthemename("light");
  };

  return (
  // JSX expression creates component and passes value prop with array with single 
    <ThemeContext.Provider value={[{ themename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ThemeProvider, ThemeContext };