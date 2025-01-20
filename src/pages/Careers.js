import React, { useState, useEffect } from "react";
import axios from "axios";
import CareerCard from "../components/CareerCard";
import "../assets/Careers.css";

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 12;

  // Fetch careers from API
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await axios.get("https://career-compass-backend.onrender.com/api/careers/");
        setCareers(response.data);
      } catch (err) {
        setError("Failed to fetch careers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  // Filter careers based on search term
  const filteredCareers = careers.filter(
    (career) =>
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentCareers = filteredCareers.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredCareers.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return <div className="loading-indicator">Loading careers...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="careers-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a career..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on search
          }}
        />
      </div>

      {/* Career Grid */}
      <div>
        <div className="career-grid">
          {currentCareers.length > 0 ? (
            currentCareers.map((career) => (
              <CareerCard
                key={career.id}
                id={career.id}
                _id={career._id}
                title={career.title}
                description={career.description}
                image={career.image}
              />
            ))
          ) : (
            <p className="no-results-message">
              No careers found for your search.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="page-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt; {/* Left arrow */}
            </button>

            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="page-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt; {/* Right arrow */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
