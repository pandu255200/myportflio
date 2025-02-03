import React from "react";
import "../styles/Contact.css";
import {
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaDev,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Connect With Me</h2>
      <div className="social-links">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram className="social-icon" />
          <span>Instagram</span>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub className="social-icon" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaYoutube className="social-icon" />
          <span>YouTube</span>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaTwitter className="social-icon" />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin className="social-icon" />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaEnvelope className="social-icon" />
          <span>Email</span>
        </a>
        <a
          href="https://dev.to"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaDev className="social-icon" />
          <span>Dev.to</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
