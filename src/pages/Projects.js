// Importing nessecary functions from various files
import React from 'react';
import ProjectItem from '../components/ProjectItem';
import HoriseonHW from "../assets/HoriseonHW.png";
import WritersCorner from "../assets/WritersCorner.png";
import ReadMEGenerator from "../assets/ReadMEGenerator.png";
import GoldenBuddies from "../assets/GoldenBuddies.png"; 
import "../styles/Projects.css";

// Function displaying projects for project tab. Links to gihub repos
function Projects() {
  return (
    <div className="projects">
      <h1></h1>
      <div className="projectList">
        <a href="https://github.com/burrielrush/HoriseonRefactor" target="_blank" rel="noopener noreferrer">
          <ProjectItem name="Horiseon Refactor HW" image={HoriseonHW} />
        </a>
        <a href="https://github.com/BrockHanni/Writers-Corner" target="_blank" rel="noopener noreferrer">
          <ProjectItem name="Writers Corner" image={WritersCorner} />
        </a>
        <a href="https://github.com/burrielrush/READMEgenerator" target="_blank" rel="noopener noreferrer">
          <ProjectItem name="Horiseon Refactor HW" image={ReadMEGenerator} />
        </a>
        <a href="https://github.com/burrielrush/GoldenBuddies.git" target="_blank" rel="noopener noreferrer">
        <ProjectItem name="Golden Buddies MERN project" image={GoldenBuddies} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
