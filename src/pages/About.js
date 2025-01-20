import React from 'react';
import '../assets/About.css'; // Import your CSS file here

const About = () => {
  return (
    <section className="about-container">
      {/* About Header */}
      <div className="about-header">
        <h1>About Career Compass</h1>
        <p>Your Guide to Finding the Right Career Path</p>
      </div>

      {/* About Content */}
      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At Career Compass, we believe that finding the right career is not just about a job—it's about discovering a path that aligns with your passion, skills, and aspirations. Whether you're starting out or looking to switch careers, we provide the tools, resources, and insights you need to navigate your career journey with confidence.
          </p>
        </div>
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals by providing them with a comprehensive platform that combines career exploration, job search tools, and educational resources. We aim to make career planning more accessible and less daunting, helping you to make informed decisions at every step of your career journey.
          </p>
        </div>
        <div className="about-text">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Empathy:</strong> We understand the challenges you face in navigating your career, and we aim to support you through every step.</li>
            <li><strong>Integrity:</strong> We provide honest, clear, and actionable advice to help you make well-informed career decisions.</li>
            <li><strong>Innovation:</strong> We continually strive to innovate and offer fresh solutions to the evolving landscape of careers and job opportunities.</li>
            <li><strong>Community:</strong> We foster a community of professionals who are committed to helping one another grow and succeed.</li>
          </ul>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="Aman.jpg" alt="Aman Kumar Thakur" />
            <h3>Aman Kumar Thakur</h3>
            <p>Team member</p>
          </div>
          <div className="team-member">
            <img src="Shristy.jpg" alt="Shristy Sinha" />
            <h3>Shristy Sinha</h3>
            <p>Team member</p>
          </div>
          <div className="team-member">
            <img src="Amit.jpg" alt="Amit Kumar Mahato" />
            <h3>Amit Kumar Mahato</h3>
            <p>Team member</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
