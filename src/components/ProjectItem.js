import React from 'react'

// Function for my projects to display and function as a button with a display photo 
function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
        <div style={{backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
    </div>
  )
}

export default ProjectItem;