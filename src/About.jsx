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
          <ul>
          <li>Member Technical Staff at HCLTech with extensive experience in helping companies create and maintain a better code base for reusability. </li>
          <li>Passionate about learning and development with a strong desire to apply skills on a larger development team at an organization. </li>
<li>Skilled in designing scalable and efficient backend systems with MongoDB for data storage, management, and querying. </li>
<li>Adept at integrating MongoDB with full-stack applications to build dynamic, data-driven solutions. Hardworking and eager to secure an Developer position where I can leverage my backend development skills in Node.js, MongoDB, and other relevant technologies.</li>

          </ul>
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
            <li>Developed a full-stack application where users can store, update, and retrieve information from a MongoDB database.</li>
            <li>Designed MongoDB schemas for storing user data, product details, and transaction records.</li>
<li>Implemented authentication using JWT (JSON Web Token) and integrated MongoDB for storing user profiles and session data.</li>
<li>Utilized Mongoose to interact with MongoDB, ensuring efficient queries and data modeling.</li>
<li><b>API for Product Management (Node.js + Express + MongoDB)</b></li>
<li>Built a RESTful API using Node.js and Express.js to manage product details for an e-commerce application.</li>
<li>Integrated MongoDB to store product data, and created endpoints to allow clients to perform CRUD operations on products.</li>
<li>Used Mongoose to define schemas and validate data before interacting with the database.</li>


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
