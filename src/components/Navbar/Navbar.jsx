import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context/theme";

import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import "./Navbar.css";

// React component that renders a nav bar with links to different sections of the page
// imports Themecontext
export const Navbar = () => {
  const [{ themename, toggeltheme }] = useContext(ThemeContext);

// uses hook to manage the state of whether or not nav menu is currently shown
// setShowNavList takes argument which will become new value for showNavList
  const [showNavList, setShowNavList] = useState(false);

// function used to toggle the nav menu and scrolls to selected section
// takes id parameter that is used to identify the section of the page
  const toggleNavList = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
// 
  return (
    <>
      <nav className="center nav">
      {/*renders unordered list of items representing a section of the website user can navigate to */}
      {/*when user clicks item it will toggle a dropdrown menu that displays the sections of website  */}
      {/*style attribute used to set the display property of the list based on the value of the showNavList state variable*/}
      {/*if showNavList is true, display property set to flex and , this allows the nav list to be shown or hidden based on user interaction*/}
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            {/*each a tag Renders link for each section of the webpage*/}
            {/*includes onClick event handler that calls the toggleNavList function with the arguement of each corresponding id within the page*/}
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}  
              className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="https://www.google.com/drive/"
              onClick={toggleNavList}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
    {/*button component that has onClick event that triggers the toggletheme function when clicked, changing the theme of the website between light/dark */}
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
        // provides a accessible label for screen readers, indicating that the button toggles the theme
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
        {/* */}
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        {/*button with onClick event that triggers the toggleNavList function that toggles the dropdown menu for the navigation bar and makes it visible to the user.  */}
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
        {/*changes the value of showNavList state variable between true and false, and button changes depending on the value of showNavList */}
        {/*if showNavLIst is true the button will show a close icon indicating nav list is open.*/}
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};