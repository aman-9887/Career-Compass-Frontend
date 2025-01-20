import React, { useState } from "react";
import axios from "axios";
import CareerCard from "./CareerCard";
import quizData from "../quizData";
import "../assets/Question.css";

const Question = () => {
  // const quizData = {
  //   streams: {
  //     Science: ["Engineering", "Medicine", "Research", "IT & Computer Science"],
  //     Arts: ["History", "Political Science", "Psychology", "Fine Arts"],
  //     Commerce: ["Accounting", "Finance", "Management", "Economics"],
  //   },
  //   subOptions: {
  //     Engineering: ["Mechanical", "Electrical", "Civil", "ComputerScience"],
  //     Medicine: ["MBBS", "Pharmacy"],
  //   },
  //   nestedOptions: {
  //     ComputerScience: [46, 47, 48, 49],
  //     Mechanical: [50, 51, 52, 53],
  //     MBBS: [54, 55, 56, 57],
  //     Pharmacy: [58, 59, 60],
  //   },
  // };

  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);
  const [selectedNestedOption, setSelectedNestedOption] = useState(null);
  const [careerOptions, setCareerOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleStreamSelection = (stream) => {
    setSelectedStream(stream);
    setSelectedSubOption(null);
    setSelectedNestedOption(null);
    setCareerOptions([]);
  };

  const handleSubOptionSelection = (option) => {
    setSelectedSubOption(option);
    setSelectedNestedOption(null);
    setCareerOptions([]);
  };

  const handleNestedOptionSelection = async (nestOption) => {
    setSelectedNestedOption(nestOption);
    const ids = quizData.nestedOptions[nestOption];
    fetchCareerOptions(ids);
  };

  const fetchCareerOptions = async (ids) => {
    setLoading(true);
    try {
      const careerData = await Promise.all(
        ids.map((id) => axios.get(`https://career-compass-backend.onrender.com/api/careers/${id}`))
      );
      const careers = careerData.map((response) => response.data);
      setCareerOptions(careers);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error("Server Error:", error.response.status);
        alert(
          `Error: ${error.response.data.message || "Server error occurred."}`
        );
      } else if (error.request) {
        // No response received
        console.error("Network Error:", error.message);
        alert("Network error. Please check your internet connection.");
      } else {
        // Other errors
        console.error("Unexpected Error:", error.message);
        alert("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="question-container">
      <h1 className="question-title">Choose Your Career Path</h1>

      {/* Stream Selection */}
      <div className="stream-selection">
        <h2 className="section-title">Select a Stream:</h2>
        {Object.keys(quizData.streams).map((stream) => (
          <button
            key={stream}
            className={`stream-button ${
              selectedStream === stream ? "active" : ""
            }`}
            onClick={() => handleStreamSelection(stream)}
          >
            {stream}
          </button>
        ))}
      </div>

      {/* Sub-option Selection */}
      {selectedStream && (
        <div className="sub-option-selection">
          <h2 className="section-title">
            Select an Option from {selectedStream}:
          </h2>
          {quizData.streams[selectedStream].map((option) => (
            <button
              key={option}
              className={`sub-option-button ${
                selectedSubOption === option ? "active" : ""
              }`}
              onClick={() => handleSubOptionSelection(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {/* Nested Options */}
      {selectedSubOption && quizData.subOptions[selectedSubOption] && (
        <div className="nested-options">
          <h2 className="section-title">
            Further Specialization in {selectedSubOption}:
          </h2>
          {quizData.subOptions[selectedSubOption].map((nestOption) => (
            <button
              key={nestOption}
              className={`nested-button ${
                selectedNestedOption === nestOption ? "active" : ""
              }`}
              onClick={() => handleNestedOptionSelection(nestOption)}
            >
              {nestOption}
            </button>
          ))}
        </div>
      )}

      {/* Final Career Options */}
      {selectedNestedOption && (
        <div className="final-options">
          <h2 className="section-title">
            These are the career options in {selectedNestedOption}:
          </h2>
          <div className="career-grid">
            {loading ? (
              <div className="loading-spinner">Loading...</div>
            ) : careerOptions.length > 0 ? (
              careerOptions.map((careerOption) => (
                <CareerCard
                  key={careerOption.id}
                  id={careerOption.id}
                  _id={careerOption._id}
                  title={careerOption.title}
                  description={careerOption.description}
                  image={careerOption.image}
                />
              ))
            ) : (
              <p>No career options found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
