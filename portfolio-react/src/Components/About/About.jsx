import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
          <p>
            I am <strong>Riya Bansal</strong>, a Pre-Final year{" "}
            <strong>Computer Science & Engineering</strong> undergraduate at{" "}
            <strong>Rajasthan Technical University, Kota</strong>, and a
            passionate <strong>Full-Stack Web Developer</strong> specializing in
            the MERN stack.
          </p>

          <p>
            I have hands-on experience building responsive, scalable, and
            user-centric web applications using{" "}
            <strong>React.js, Node.js, Express.js, and MongoDB</strong>. Through
            internships and real-world projects, I’ve worked on front-end UI
            development, backend APIs, authentication, and database integration.
          </p>

          <p>
            Alongside development, I actively strengthen my{" "}
            <strong>Data Structures & Algorithms</strong> skills to improve
            problem-solving and write efficient, optimized code. I enjoy
            learning new technologies, collaborating with teams, and building
            solutions that solve real-world problems.
          </p>


          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "85%" }} />
            </div>

            <div className="about-skill">
              <p>Node.js & Express.js</p>
              <hr style={{ width: "80%" }} />
            </div>

            <div className="about-skill">
              <p>MongoDB & MySQL</p>
              <hr style={{ width: "75%" }} />
            </div>

            <div className="about-skill">
              <p>DSA</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
