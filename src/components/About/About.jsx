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
        <h1 data-aos="fade-right" className="mobileHead">
          Welcome <span className="about__name">I'm Mahamadou Touray</span>
        {/* </h1>
        <h1 data-aos="fade-right" className="mobileHead">
          I'm Mahamadou Touray */}
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Software Developer having proficiency in
          Full Stack. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on since last year and delivered
          15+ projects till now.
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
