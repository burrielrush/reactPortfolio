import React from 'react';
import Instagram from '@mui/icons-material/Instagram';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, my name Rush Burriel </h2>
        <div className="prompt"> 
        <p>A full stack web developer with a passion to make things 
          </p>
          <LinkedIn />
          <Instagram /> 
          <GitHub /> 
          </div>
        </div>
      <div classNmae="skill"> 
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2> Front End </h2>
          <span>HTML, CSS, JavaScript, React, handlebars, webpacks, bootstrap, tailwind </span>
        </li>
        <li className="item">
          <h2> Back End </h2>
          <span>Node.js, Express, MongoDB, MySQL, APIs, JSON, Heroku, GITHUB</span>
        </li>
        <li className="item">
          <h2> Languages </h2>
          <span>HTML, CSS, JavaScript, React</span>
        </li>
      </ol>
      </div>
    </div>
  )
}

export default Home