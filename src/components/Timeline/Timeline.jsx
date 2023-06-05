import React, { useContext, useState, useEffect } from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import { ThemeContext } from "../../Context/theme";

// functional component that renders a timeline 
export const Timeline = () => {
// component imports themecontext from theme.jsx to dynamically set the color of timeline 
  const [{ themename }] = useContext(ThemeContext);

// uses usestate and useeffect hooks to update color when theme changes 
// if themename is light linecolor is set to #, otherwise set to other value
// effect function is called whenever themename changes and updates linecolor to value based on the new value of themename
  const [linecolor, setlinecolor] = useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );
  useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);

// JS object that define the style of timeline element and icon  
  const timelineElementStyle = {
    boxShadow: `var(--shadow)`,
    border: "3px solid var(--clr-primary)",
    backgroundColor: `var(--clr-bg)`,
    textAlign: "center",
    color: `var(--clr-fg-alt)`,
  };

  const timelineIconStyle = {
    border: ` 3px solid var(--clr-primary)`,
    backgroundColor: `var(--clr-bg)`,
    color: `var(--clr-primary)`,
  };
// using code snippets to write HTML-like code in js files
// renders VertTimeline and VertTimelineElement components
// timeline has several entry's each represented by VertTimeLine component with different dates and information
// content is structured with a title, subtitle and description
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"Sept 2010 - Jun 2014"}
            contentStyle={timelineElementStyle}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={timelineIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Graduate
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Bloomfield Tech High 
            </h4>
            <p data-aos="fade-right">
              Vocational Technical High School that offered occupational and academic instruction in courses related to building trades, graphic design, green energy, and televison/production.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Sept 2014 - Dec 2016"}
            contentStyle={timelineElementStyle}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={timelineIconStyle}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              (First Job) Package Handler
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              UPS
            </h4>
            <p data-aos="fade-right">
              Loads and secure packages into delivery trucks. Adhere to company safe package handling standards at all times.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Jan 2017 - 2018"}
            contentStyle={timelineElementStyle}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={timelineIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Inventory Associate
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Co-Op Inventory Service
            </h4>
            <p data-aos="fade-right">
            To perform a physical inventory in our clients retail stores. Specifically, to count product in all departments. The inventory is obtained by using either portable printing calculators or computer terminals.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Sept 2018 - May 2021"}
            contentStyle={timelineElementStyle}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={timelineIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Associates Degree in Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Essex County College 
            </h4>
            <p data-aos="fade-right">
              Degree program that offers a foundation for engineering studies to students using science, mathematical and physic principles. Specifically designed to prepare students for 4-year colleges, universities and for employment upon completion.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Nov 2018 - Present"}
            contentStyle={timelineElementStyle}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={timelineIconStyle}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Prime Now-Ecommerce Shopper
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Amazon/Whole Foods 
            </h4>
            <p data-aos="fade-right">
              Work on the whole foods Ecommerce team supporting Prime Now customer orders. Shopping throughout the stores for everyday goods from various departments and preparing them for delivery and/or pickup.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"July 2021 - Jan 2023"}
            contentStyle={timelineElementStyle}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={timelineIconStyle}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Freight Dispatcher
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              T&D Freight Express LLC
            </h4>
            <p data-aos="fade-right">
              Schedule and secure freight to be picked up and delivered in timely manner through a trucking load board. Manage truck driver's routes and schedules. Complete paperwork for submission pertaining to each delivery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Jan 2023 - May 2023"}
            contentStyle={timelineElementStyle}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={timelineIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              SoftWare Engineering Bootcamp
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Per Scholas
            </h4>
            <p data-aos="fade-right">
              15 week Software Engineering course that dives deep into every aspect of software engineering - computer science, React, Node, design patterns and system architecture, and more.Learn basic computer science topics like object-oriented programming and Javascript.
            </p>
          </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </>
    )
  }

