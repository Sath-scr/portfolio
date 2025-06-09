import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'logo design',
    image: '/logo.jpeg',
  },
  {
    title: 'poster design',
    image: '/poster.jpeg',
  },
  {
    title: 'backdrop design',
    image: '/backdrop.jpeg',
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Latest <span>Projects</span></h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h4>{project.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
