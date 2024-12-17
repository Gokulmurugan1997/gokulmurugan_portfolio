import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div className="container">
      <Navbar />
      <div className="about-section">
        <div className="photo-container"></div>

        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hello, I'm Gokulmurugan, a passionate web developer with a strong
            background in creating dynamic and responsive websites. I specialize
            in front-end development, working with technologies like HTML, CSS,
            JavaScript, and React. I enjoy problem-solving and building intuitive
            user experiences. When I'm not coding, you can find me exploring new
            technologies or collaborating on open-source projects.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h2>Experience</h2>
        <div className="experience">
          <div className="experience-item">
            <h3>Web Developer at HCL Technologies</h3>
            <p className="experience-duration">January 2022 - Present</p>
            <ul>
              <li>Developed and maintained responsive websites using HTML, CSS, and JavaScript.</li>
              <li>Collaborated with the UI/UX team to design seamless user interfaces.</li>
              <li>Optimized web applications for speed and scalability.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Member Technical Staff at HCL Technologies</h3>
            <p className="experience-duration">December 2020 - December 2021</p>
            <ul>
              <li> Creating/Revising ECO for Manufacturing Process Verification documents in PLM for MDR Regulation</li>
              <li>Proficiency in Creating and Reviewing documents in PLM Tools like Windchill, Adaptiv.</li>
              <li>Projects level risks are analyzing, Evaluating, controlling, and monitoring the risk in every month</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>
        <div className="education">
          <div className="education-item">
            <h3>Bachelor of Engineering in Mechanical Engineering</h3>
            <p className="education-duration">August 2015 - May 2019</p>
            <p className="education-institute">Government College of Engineering- Bodi-Theni-Tamilnadu-Anna University</p>

          </div>
          <div className="education-item">
            <h3>Higher Secondary Education</h3>
            <p className="education-duration">June 2013 - May 2016</p>
            <p className="education-institute">Grace Metric Higher secondary School-Erode-Tamilnadu</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
