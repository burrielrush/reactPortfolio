import React from 'react'
import ProjectItem from '../components/ProjectItem';
import HoriseonHW from "../assets/HoriseonHW.png";
import "../styles/Projects.css";
function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectList">
        <ProjectItem name ="" image={HoriseonHW}/>
        <ProjectItem />
      </div>

    </div>
  )
}

export default Projects