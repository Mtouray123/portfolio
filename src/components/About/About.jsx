import React from "react";
import "./About.css";
// Usewords component is rendered and fetches and displays random word/definition from the API.
import { UseWords } from "../../API/Words";
import { Introduction } from "../Introduction/Introduction";
import { Timeline } from "../Timeline/Timeline";
import { Techstacks } from "../Techstacks/Techstacks";
import { Type } from "./Type";

// Renders various components related to my Intro, Skills, Contact, and resume
export function About() {
  return (
    <>
        <div>
        <UseWords />
        </div >
      <div className="about center">
{/*uses data-aos attribute indicating component animated using AOS(Animate on Scroll) library */}
        <h1 className="mobileHead">
          Welcome <span className="about__name">I'm Mahamadou Touray</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Enthusiastic Software Engineer skilled in MERN stack and React.js development. Proficient in building web applications and knowledgeable in SQL fundamentals. Eager to expand expertise and embrace emerging technologies.
        </p>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
