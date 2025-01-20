import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/questions");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Dream Career</h1>
          <p>
            Your journey begins here. Explore career options and get
            personalized guidance.
          </p>
          <button
            className="cta-button"
            onClick={handleExploreClick}
            data-text="Awesome"
          >
            <span className="actual-text">&nbsp;explore&nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;explore&nbsp;
            </span>
          </button>
        </div>
      </section>
      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <h3>Career Path Exploration</h3>
            <p>
              Explore different career paths, discover your passion, and find
              the right fit.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card">
            <h3>Course Recommendations</h3>
            <p>
              Receive personalized course suggestions based on your interests
              and skills.
            </p>
          </div>

          {/* Feature Card 3
          <div className="feature-card">
            <h3>AI-Powered Guidance</h3>
            <p>
              Use AI to get career advice and discover the best paths tailored
              just for you.
            </p>
          </div> */}

          {/* Feature Card 4 */}
          <div className="feature-card">
            <h3>User Accounts</h3>
            <p>
              Create an account, track progress, and save your favorite career
              options.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p className="section-description">
          Learn how our platform helps you explore the best career options,
          personalized to your skills and interests.
        </p>
        <div className="steps">
          {/* Step 1 */}
          <div className="step">
            <h3>Step 1: Choose Your Interests</h3>
            <p>
              Start by selecting your interests. Whether it's science, arts, or
              commerce, we'll guide you towards the right path.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step">
            <h3>Step 2: Get Career Recommendations</h3>
            <p>
              Based on your interests, we suggest career options with detailed
              information, including skill sets and career outlook.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step">
            <h3>Step 3: Explore Courses & Institutions</h3>
            <p>
              Discover top courses and institutions that match your career
              goals, and find the right fit for your future.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Careers Section */}
      <section className="explore-careers">
        <h2>Explore Career Paths</h2>
        <p className="section-description">
          Choosing the right career is crucial to your future success. Browse
          through various fields to discover the wide range of opportunities
          available to you.
        </p>
        <div className="career-categories">
          {/* Science Category */}
          <div className="category">
            <h3>Science</h3>
            <p>
              The science field offers an exciting range of careers that help
              improve the world. From research and technology development to
              environmental sustainability and medical breakthroughs, the
              possibilities are endless.
            </p>
            <ul>
              <li>
                <strong>Research Scientist:</strong> Delve into groundbreaking
                studies and make discoveries that can change the world.
              </li>
              <li>
                <strong>Engineer:</strong> Work on designing solutions to
                everyday problems, from creating better infrastructure to new
                technological advancements.
              </li>
              <li>
                <strong>Doctor/Healthcare Professional:</strong> Help save lives
                and improve health through patient care, research, and
                innovation.
              </li>
              <li>
                <strong>Pharmacist:</strong> Contribute to healthcare by
                ensuring the safe use of medications.
              </li>
            </ul>
          </div>

          {/* Commerce Category */}
          <div className="category">
            <h3>Commerce</h3>
            <p>
              The commerce field covers careers in business, finance, marketing,
              and management. This diverse sector offers paths that cater to
              those interested in leadership, strategy, and economic
              development.
            </p>
            <ul>
              <li>
                <strong>Financial Analyst:</strong> Analyze data to guide
                companies in making smart investment decisions.
              </li>
              <li>
                <strong>Marketing Specialist:</strong> Develop strategies to
                promote products and services and grow brands.
              </li>
              <li>
                <strong>Business Consultant:</strong> Help businesses improve
                their performance and efficiency.
              </li>
              <li>
                <strong>Entrepreneur:</strong> Start your own business, create
                products, and drive innovation.
              </li>
            </ul>
          </div>

          {/* Arts Category */}
          <div className="category">
            <h3>Arts</h3>
            <p>
              If you have a passion for creativity, the arts field offers a
              multitude of opportunities. From performing arts to digital
              design, this sector celebrates expression and innovation.
            </p>
            <ul>
              <li>
                <strong>Graphic Designer:</strong> Use your artistic skills to
                create visually appealing designs for websites, advertisements,
                and brands.
              </li>
              <li>
                <strong>Writer/Content Creator:</strong> Craft stories,
                articles, or scripts for media, books, and advertising.
              </li>
              <li>
                <strong>Actor/Performer:</strong> Bring stories to life on stage
                or in front of a camera.
              </li>
              <li>
                <strong>Photographer/Videographer:</strong> Capture memorable
                moments and create powerful visual storytelling.
              </li>
            </ul>
          </div>

          {/* Vocational Category */}
          <div className="category">
            <h3>Vocational</h3>
            <p>
              Vocational careers provide hands-on training in specialized
              fields. If you're looking for a career in a creative or
              service-oriented industry, these paths may be a perfect fit.
            </p>
            <ul>
              <li>
                <strong>Hotel Management:</strong> Manage the operations of
                hotels and resorts, providing exceptional customer service and
                ensuring the smooth functioning of hospitality services.
              </li>
              <li>
                <strong>Event Management:</strong> Organize and manage events,
                including conferences, weddings, and large corporate functions.
              </li>
              <li>
                <strong>Travel & Tourism:</strong> Explore careers in the travel
                industry, helping people plan vacations, tours, and other travel
                experiences.
              </li>
              <li>
                <strong>Fashion Design:</strong> Design and create fashionable
                clothing, accessories, and footwear, shaping the fashion
                industry.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
