import React from "react";
import { useContext } from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

// functional component that displays info on About Me section
export const Introduction = () => {
// extracts themename property from context object
  const { themename } = useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right"> 
          
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          
          <div>
            <div className="introduction_datacontainer">
              <h4>
                Hello, My name is{" "}
                <span className="different">Mahamadou Touray </span>. Born and raised in{" "}
                <span className="different">
                  {" "}
                  East Orange, NJ (USA)
                </span>
                . I have completed my Associates Degree in Engineering (Mechanical Engineering)
                from{" "}
                <span className="different">
                  Essex County College 
                </span>
                . Now I am shifting my career path towards Software and I begin my journey by joining a full stack development course by{" "}
                <span className="different">Per Scholas</span> a Non-Profit Tech Institute
              </h4>
              <h4>Terms That can describe me:</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Enthusiastic{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Passionate{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Willingness to Learn{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Determined{" "}
              </h4>
            </div>"
          </div>
        </div>
      </section>
    </>
  );
};