import React from 'react';
import '../styles/About.css'
import { FaChevronDown } from 'react-icons/fa';
import ScrollToSection from './ScrollToSection';

const About = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'HTML/CSS', 'Python', 'SQL', 'Git', 'UI/UX Design'];

  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm a passionate full-stack developer with expertise in React, Node.js, and modern web technologies.
          I love building scalable and user-friendly applications that solve real-world problems.
        </p>
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <ScrollToSection targetId="projects" className="scroll-arrow">
        <FaChevronDown size={40} color="black" />
      </ScrollToSection>
    </section>
  );
};

export default About;
