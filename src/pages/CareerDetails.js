import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import careerData from "../data";
import "../assets/CareerDetails.css";

// Register chart elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const CareerDetails = () => {
  const { id } = useParams();
  // const career = careerData.find((career) => career.id === parseInt(id));
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const response = await axios.get(`https://career-compass-backend.onrender.com/api/careers/${id}`);
        setCareer(response.data);
      } catch (err) {
        setError("Failed to fetch career data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCareerData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!career) {
    return <p>Career not found.</p>;
  }

  const {
    title,
    // description,
    // image,
    details: {
      summary,
      responsibilities,
      skills,
      education,
      typicalDay,
      careerPaths,
      salary,
      toolsTechnologies,
      certifications,
      jobOutlook,
      organizations,
      workEnvironment,
      topEmployers,
      specializations,
      advancedEducation,
      emergingTrends,
      challenges,
      networking,
      globalOpportunities,
      faqs,
      graphData,
      resources,
    },
  } = career;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleFaqToggle = (index) => {
    setActiveFaq((prevIndex) => (prevIndex === index ? null : index));
  };

  // Chart for skills proficiency
  const chartData = {
    labels: graphData.skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Proficiency (%)",
        data: graphData.skills.map((skill) => skill.proficiency),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="career-details">
      <h1>{title}</h1>
      {/* <img src={image} alt={title} className="career-image" /> */}
      <p className="summary-details">{summary}</p>

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => handleTabClick("skills")}
        >
          Skills
        </button>
        <button
          className={activeTab === "salary" ? "active" : ""}
          onClick={() => handleTabClick("salary")}
        >
          Salary
        </button>
        <button
          className={activeTab === "careerPaths" ? "active" : ""}
          onClick={() => handleTabClick("careerPaths")}
        >
          Career Paths
        </button>
        <button
          className={activeTab === "emergingTrends" ? "active" : ""}
          onClick={() => handleTabClick("emergingTrends")}
        >
          Emerging Trends
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="tab-content">
          <section>
            <h2>Responsibilities</h2>
            <ul>
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Education</h2>
            <p>{education}</p>
          </section>

          <section>
            <h2>A Typical Day</h2>
            <ul>
              {typicalDay.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </section>
        </div>
      )}

      {activeTab === "skills" && (
        <div className="tab-content">
          <section>
            <h2>Skills Proficiency</h2>
            <div className="graph-container">
              <Line data={chartData} options={{ responsive: true }} />
            </div>
          </section>

          <section>
            <h2>Skills</h2>
            <ul>
              {skills.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </section>
        </div>
      )}

      {activeTab === "salary" && (
        <div className="tab-content">
          <section>
            <h2>Salary</h2>
            <p>{salary.description}</p>
            <p>Range: {salary.range}</p>
          </section>
        </div>
      )}

      {activeTab === "careerPaths" && (
        <div className="tab-content">
          <section>
            <h2>Career Paths</h2>
            <ul>
              {careerPaths.map((path, index) => (
                <li key={index}>{path}</li>
              ))}
            </ul>
          </section>
        </div>
      )}

      {activeTab === "emergingTrends" && (
        <div className="tab-content">
          <section>
            <h2>Emerging Trends</h2>
            <ul>
              {emergingTrends.map((trend, index) => (
                <li key={index}>{trend}</li>
              ))}
            </ul>
          </section>
        </div>
      )}

      <section>
        <h2>Tools Technologies</h2>
        <ul>
          {toolsTechnologies.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          {certifications.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Job Outlook</h2>
        <p>{jobOutlook}</p>
      </section>

      <section>
        <h2>Organizations</h2>
        <ul>
          {organizations.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Work Environment</h2>
        <p>{workEnvironment}</p>
      </section>

      <section>
        <h2>Top Employers</h2>
        <ul>
          {topEmployers.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Specialization</h2>
        <ul>
          {specializations.map((activity, index) => (
            <div key={index} className="tab-content">
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
              <ul>
                <h4>Tools</h4>
          {activity.tools.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
            </div>
          ))}
        </ul>
      </section>

      <section>
        <h2>Advanced Educations</h2>
        <p>{advancedEducation}</p>
      </section>

      <section>
        <h2>Challenges</h2>
        <ul>
          {challenges.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Networking</h2>
        <p>{networking}</p>
      </section>

      <section>
        <h2>Global Opportunities</h2>
        <p>{globalOpportunities}</p>
      </section>

      {/* FAQs */}
      <section>
        <h2>FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <div
              onClick={() => handleFaqToggle(index)}
              className="faq-question"
            >
              <strong>{faq.question}</strong>
            </div>
            {activeFaq === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </section>

      {/* Resources */}
      <section>
        <h2>Resources</h2>
        <ul>
          {resources.map((resource, index) => (
            <li key={index}>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CareerDetails;
