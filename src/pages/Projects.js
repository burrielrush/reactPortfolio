import React from 'react'
import ProjectItem from '../components/ProjectItem';
import HoriseonHW from "../assets/HoriseonHW.png";
import WritersCorner from "../assets/WritersCorner.png";
import "../styles/Projects.css";
function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        <ProjectItem name ="Horiseon Refactor HW" image={HoriseonHW}/>
        <ProjectItem name="Writers Corner" image={WritersCorner}/>
      </div>

    </div>
  )
}

export default Projects