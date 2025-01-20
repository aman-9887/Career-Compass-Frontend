import React from "react";
import { Link } from "react-router-dom";
import "../assets/NotFound.css"; // Optional for custom styling

const NotFound = () => {
  return (
    <div className="not-found-container">
        <img
        src="not-found.svg"
        alt="Page Not Found"
        className="not-found-image"
      />
      <h2>Oops! Page Not Found</h2>
      <p className="not-found-message">
        The page you are looking for does not exist or has been moved. 
        Let's get you back on track.
      </p>
      <Link to="/" className="home-link">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
