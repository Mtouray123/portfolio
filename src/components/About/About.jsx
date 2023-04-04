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
        Inspiring Software Engineer and well rounded individual who possesses the willingness to learn a multitude of new skills. 
        Having a variety of tools & technologies and keen to learn new ones. 
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
