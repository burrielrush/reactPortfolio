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
          <p>A full stack web developer with a passion to make things</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/rush-burriel-26a448263/" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a href="https://www.instagram.com/rushburriel/" target="_blank" rel="noopener noreferrer">
              <Instagram /> 
            </a>
            <a href="https://github.com/burrielrush" target="_blank" rel="noopener noreferrer">
              <GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="skill"> 
      <h1>About me</h1>
      <p>
        <strong>About Me</strong><br />
        Hello there! I'm [Your Name], a passionate and creative web developer with a love for crafting engaging and user-friendly digital experiences. As a lifelong learner and problem solver, I find immense joy in the ever-evolving world of web development.<br /><br />

        <strong>Background and Expertise</strong><br />
        With a background in web development and coding, I have honed my skills and gained valuable experience in various aspects of the development process. Although I am new to the tech world, I am hungry for knowledge and growth.<br /><br />

        <strong>Passion and Motivation</strong><br />
        What drives me as a web developer is the ability to turn ideas into reality through code. I find inspiration in the endless possibilities of the digital landscape and the power it holds to connect people and businesses worldwide. My goal is to create meaningful, functional, and visually stunning solutions that make a positive impact on users' lives.<br /><br />

        <strong>Skills and Approach</strong><br />
        Proficient in a wide array of technologies, I enjoy staying up-to-date with the latest industry trends and best practices. I take a meticulous and detail-oriented approach to development, ensuring clean and efficient code that not only works flawlessly but is also easily maintainable.<br /><br />

        <strong>Notable Projects</strong><br />
        Throughout my professional journey, I've had the privilege of navigating some high stress and result driven situations that challenged my skills and creativity, with success. Ultimately making me a great asset to any team.  Notably, which allowed me to showcase my ability to tackle complex problems and deliver exceptional results.<br /><br />

        <strong>Collaboration and Philosophy</strong><br />
        As much as I thrive on individual challenges, I also believe in the power of collaboration. I enjoy working in dynamic teams where ideas flow freely, and each member's unique strengths contribute to the project's success. Communication and teamwork are vital to creating cohesive and impactful solutions.<br /><br />

        <strong>Personal Touch</strong><br />
        When I'm not coding you can find me traveling, exploring the outdoors or gaming. I've been blessed with my 2 amazing kids Leo & Lola and my awesome wife Hailey. I also have a love for MMA and currently train Muay Thai. I believe having working out the body is just as important as working out the mind. <br /><br />

        <strong>Let's Connect!</strong><br />
        I'm excited to connect with fellow developers, designers, and like-minded professionals. Whether you want to discuss potential collaborations or just chat about all things web development, feel free to reach out to me at burrielrush@gmail.com.<br /><br />

        Thank you for visiting my portfolio, and I look forward to the journey ahead!
      </p>
      
      </div>
    </div>
  )
}

export default Home