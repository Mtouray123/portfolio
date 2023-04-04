import React, { useContext } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";

export const Header = () => {
// uses the useContext hook to access the value of themename property
  const [{ themename }] = useContext(ThemeContext);

  return (
    <>
    {/*value of themename is concatenated with the string */}
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            Touray
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
}; 