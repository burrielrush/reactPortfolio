// Importing VerticalTimeline components to be used in portfolio 
import React from 'react'
import {
  VerticalTimeline, 
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";


// Timeline React function, displaying past school and work experience, coolest aspect of my portfolio so far
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#7395AE">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2008-2011"
        iconStyle={{background: "#000080" }}
        >
          <h3 className="vertical-timeline-element-title">
            Syracuse High School, Syracuse, Utah
          </h3>
          <p> High School Diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2011-2013"
        iconStyle={{background: "#228B22" }}
        >
          <h3 className="vertical-timeline-element-title">
            Montana Tech University, Butte, Montana
          </h3>
          <p> College Credits </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2014-2023"
        iconStyle={{background: "#800080" }}
        >
          <h3 className="vertical-timeline-element-title">
            Biolife Plasma Services, Layton, Utah
          </h3>
          <p> Plasma Center Supervisor</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="Feb 2023- Aug 2023"
        iconStyle={{background: "#CC0000" }}
        >
          <h3 className="vertical-timeline-element-title">
            University of Utah, SLC, Utah
          </h3>
          <p> Full stack web development and coding bootcamp certification </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;