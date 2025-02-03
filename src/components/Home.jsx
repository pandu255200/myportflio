import React from "react";
import "../styles/Home.css";
import { FaChevronDown } from "react-icons/fa";
import ScrollToSection from "./ScrollToSection";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>GOPINATH</h1>
        <h2>FrontEnd Developer</h2>
        <p>
          Seeking a professionally challenging career in the area of Software
          development, to use my skills and put my maximum effort in the best
          possible way for achieving organization’s growth. Key participant and
          team player in all phases of the development life cycle of Projects.
          Team Player with excellent interpersonal skills.
        </p>
      </div>
      <ScrollToSection targetId="about" className="scroll-arrow">
        <FaChevronDown size={40} color="white" />
      </ScrollToSection>
    </section>
  );
};

export default Hero;
