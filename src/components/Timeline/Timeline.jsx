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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis quisquam cupiditate, perspiciatis consequatur doloremque fugit obcaecati tenetur amet aspernatur voluptatum quod totam quo aut, vero deserunt nostrum quos accusamus.
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
              Inventory Specialist
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Co-Op Inventory Service
            </h4>
            <p data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis quisquam cupiditate, perspiciatis consequatur doloremque fugit obcaecati tenetur amet aspernatur voluptatum quod totam quo aut, vero deserunt nostrum quos accusamus.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Oct 2021 - Present"}
            contentStyle={timelineElementStyle}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={timelineIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Freight Dispatcher
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              UPS
            </h4>
            <p data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis quisquam cupiditate, perspiciatis consequatur doloremque fugit obcaecati tenetur amet aspernatur voluptatum quod totam quo aut, vero deserunt nostrum quos accusamus.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"Oct 2021 - Present"}
            contentStyle={timelineElementStyle}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={timelineIconStyle}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" data-aos="fade-right">
              Alumni
            </h3>
            <h4 className="vertical-timeline-element-subtitle" data-aos="fade-right">
              Per Scholas
            </h4>
            <p data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis quisquam cupiditate, perspiciatis consequatur doloremque fugit obcaecati tenetur amet aspernatur voluptatum quod totam quo aut, vero deserunt nostrum quos accusamus.
            </p>
          </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </>
    )
  }

