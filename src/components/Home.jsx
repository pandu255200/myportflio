import React from "react";
import "../styles/Home.css";
import chevron from '../images/social/chevron.png';
import ScrollToSection from "./ScrollToSection";

const Hero = () => {
  // Function to scroll to the target section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <img src={chevron} alt="Scroll down" className="arrow-image" />
      </ScrollToSection>
    </section>
  );
};

export default Hero;
