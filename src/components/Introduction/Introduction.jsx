import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Mahamadou Touray </span> and I was born and raised in{" "}
                <span className="different">
                  {" "}
                  East Orange, NJ (USA)
                </span>
                . I have completed my graduation in Engineering (Mechanical Engineering)
                from{" "}
                <span className="different">
                  Essex County College 
                </span>
                . Then I joined full stack development course by{" "}
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