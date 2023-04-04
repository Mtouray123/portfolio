import React, { ReactDOM, useContext, } from "react";
import { ThemeContext } from "../../Context/theme";
// imports from react icons library 
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

import "./Contact.css";

// React functional component that exports Contact component
export const Contact = () => {
// uses the useContext hook to access the value of the themename property from THemeContext object
  const [{ themename }] = useContext(ThemeContext);

  return (
    <>
    {/*component renders a "section" div with class of section */}
      <div className="section">
      {/*renders a H2 and an animation attribute */}
        <h2 className="section__title" data-aos="fade-right">
        {/* Touch placed within span tags to apply different style */}
          Get in <span className="different">Touch</span>
        </h2>
        {/*section div also contains a contactMain div with two child divs*/}
        <div className="contactMain">
          {/*div has a class concatenated with the value of the themename property*/}
          <div className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
          {/*four anchor tags that each link to a specific external URL*/}
            <a
              href="https://www.linkedin.com/in/mahamadou-touray-673986110/"
              target="_blank"
              rel="noreferrer"
            >
            {/*each tag also has a different icon rendered from the imported icon library */} 
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/Mtouray123"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:mahamadou12@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+19739050437" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          {/*div has a class mailnumber and two child divs within*/}
          <div className="mailNumber" data-aos="fade-right">
            <div>
            {/*each div has span tag containing a different icon*/}
              <span>
                <CgMail className="email" />
              </span>
              <span>
              {/*p tag with the developers email and phone number */}
                <p>Mahamadou12@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+19739050437</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    {/*returns entire structure wrapped in a react fragment*/}
    </>
  );
};