import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import Jeopardy from "../../assets/JeopardyScreenshot.png"
import Spacejam from "../../assets/SpaceJam.png"
import Website from "../../assets/MyWebsite.png"

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Spacejam}
                    alt="Movies App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Movies App</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore exercitationem obcaecati quo fuga sequi, consectetur quod maxime.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <FaReact />
                </div>
                <div>
                  <a
                    href="https://moviesforfun.netlify.app/"
                    target=""
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Mtouray123/Module_2/tree/main/moviesapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/MPzWN49/weather-app.png"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>SK Weather App</h2>
                <p>
                  Location based weather app. User can also search for their
                  cities and pickup location from map to see weather data of
                  respective places.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://sk-weather-app.netlify.app/weather-app.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
      
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Jeopardy}
                    alt="Jeopardy"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Jeopardy Project</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga voluptate odit animi explicabo culpa? Culpa veritatis aperiam alias recusandae voluptates velit dolore quidem. Ipsum neque consequatur beatae soluta, id praesentium.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://jeopardyproject.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Let's Play
                    </span>
                  </a>
                  <a
                    href="https://github.com/Mtouray123/Jeopardy-Project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Website}
                    alt="First Website"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>First HTML Website</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, voluptates minima voluptatum, in tempora illo iure eos quaerat, ea tempore deleniti fugit sint debitis labore!
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://mahamadouwebsite.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Mtouray123/MyFirstWebsite"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Lorem, ipsum dolor.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eum pariatur nihil repellat laudantium eius, earum quod deserunt voluptatem enim reiciendis et voluptatibus nisi amet!
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://mahamadouwebsite.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1tcSc1Io_0UAzk7-qr-RvK51I8-KmXsVgMAJhjkapK-A/edit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};