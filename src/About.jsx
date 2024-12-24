import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <div className="container drop-text">
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
            <p className="experience-duration">December 2020 - Present</p>
            <ul>
<li>Supporting in creation of Project Management Web application called PM SMART for tracking daily and monthly efforts of resource utilization for the project.</li>
<li>Supporting in improvisation of Employee Self Service website for maximizing user efficiency.</li>
<li>Using multiple components in application for code reusability.</li>
<li>Utilized HTML, CSS, and JavaScript to create visually appealing and responsive web pages that met client requirements.</li>
<li>Utilized version control systems such as Git to track changes throughout the development process.</li>
<li>Worked closely with UX/UI designers to translate their designs into functional web applications.</li>
<li>Developed user-friendly web forms with validation and error handling.</li>
<li>Demonstrated strong organizational and time management skills while managing multiple projects.</li>
<li>Participated in team projects, demonstrating an ability to work collaboratively and effectively.</li>
<li>Managed time efficiently in order to complete all tasks within deadlines.</li>
<li>Collaborated with back-end developers to improve website functionality and integrate new features.</li>

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
            <p className="education-duration">June 2013 - May 2015</p>
            <p className="education-institute">Grace Metric Higher secondary School-Erode-Tamilnadu</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
