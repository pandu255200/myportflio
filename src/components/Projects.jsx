import React from "react";
import "../styles/Projects.css";
import { FaChevronDown } from 'react-icons/fa';
import ScrollToSection from './ScrollToSection';
const Projects = () => {
  const projects = [
    {
      title: "Data Solutions",
      description: "Leading the future with data-driven decision making.",
      url: "https://afry.com/en/area/data-solutions",
    },
    {
      title: "SmartResume - AI Resume Builder",
      description:
        "A web app that generates professional resumes using AI-powered suggestions and templates.",
      url: "https://smartresume.ai",
    },
    {
      title: "TaskMaster - Productivity App",
      description:
        "A task and project management tool with real-time collaboration and reminders.",
      url: "https://purelydot.in/products/taskmaster-productivity-tracker",
    },
    {
      title: "WeatherNow - Live Weather App",
      description: "A real-time weather forecasting app with location-based weather updates.",
      url: "https://weathernow.app",
    },
    {
      title: "ChatterBox - Real-time Chat App",
      description: "A real-time chat application with end-to-end encryption and group chats.",
      url: "https://chatterbox.app"
    },
    {
      title: "LearnSphere - E-learning Platform",
      description: "An online learning portal offering courses in programming, design, and business skills.",
      url: "https://learnsphere.com"
    },
  ];

 
  const handleProjectClick = (url) => {
    window.open(url, "_blank"); 
  };

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3
                className={project.url ? "clickable-title" : ""}
                onClick={
                  project.url ? () => handleProjectClick(project.url) : null
                }
              >
                {project.title}
              </h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <ScrollToSection targetId="contact" className="scroll-arrow">
        <FaChevronDown size={40} color="black" />
      </ScrollToSection>
    </section>
  );
};

export default Projects;
