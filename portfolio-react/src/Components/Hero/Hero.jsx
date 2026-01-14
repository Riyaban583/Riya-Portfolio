import React, { useState } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpeg";

const Hero = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div id="home" className="hero">
      {/* Profile Image */}
      <img src={profile_img} alt="Riya Bansal" className="hero-img" />

      {/* Heading */}
      <h1>
        Hi, I'm <span>Riya Bansal</span>
        <br />
        <span className="role">Full-Stack Developer (MERN)</span>
      </h1>

      {/* Description */}
      <p>
        Full-Stack Web Developer with hands-on experience in building responsive,
        scalable, and user-focused applications using the MERN stack. Strong in
        React.js, Node.js, and REST APIs, with a solid foundation in Data
        Structures and Algorithms. Currently pursuing B.Tech in Information
        Technology at Rajasthan Technical University, Kota, while gaining
        real-world experience through internships, hackathons, and impactful
        projects.
      </p>

      {/* Actions */}
      <div className="hero-action">
        {/* Contact Button */}
        <div
          className="hero-connect"
          onClick={() => setShowIcons(!showIcons)}
        >
          Contact with me
        </div>

        {/* Resume Download */}
        <a
          href="/Riya_Bansal_Resume.pdf"
          download
          className="hero-resume"
        >
          Download Resume
        </a>
      </div>

      {/* Social Icons */}
      {showIcons && (
        <div className="contact-icons">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/riyabansal405"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img src="/linkedin.webp" alt="LinkedIn" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Riyaban583"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img src="/Github.webp" alt="GitHub" />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Riyabnsl123/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
          >
            <img src="/Leetcode.png" alt="LeetCode" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Hero;
