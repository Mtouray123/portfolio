import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ScrollToTop.css";

// functional component that renders a scroll to top button that appears when user scrolls beyond a certain point
export const ScrollToTop = () => {
// uses useState hook to define the isVisible state, which determines whether button should be visible or not, initizalized by false
  const [isVisible, setIsVisible] = useState(false);

// used to add event listener to the window object 
// when user scrolls, toggleVisibility function is called, checks whether user has scrolled more than 500 pixels
// if they pass 500 px component state is updated to true to make scroll to top button visible
  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
//renders the scroll to top as material ui arrow wrapped in anchor tag that links to top of the page.
  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </div>
  ) : null;
};