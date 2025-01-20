import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import axios from "axios";
import "../assets/CareerCard.css";

const CareerCard = ({ id, _id, title, description, image }) => {
  const { user, token } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the career is already a favorite
  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      try {
        const response = await axios.get(
          "https://career-compass-backend.onrender.com/api/favorites",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const favoriteIds = response.data.map((favorite) => favorite.careerId);
        setIsFavorite(favoriteIds.includes(_id));
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, [user, token, _id]);

  const handleToggleFavorite = async () => {
    if (!user) {
      return (
        <Navigate 
          to="/login" 
          state={{ 
            message: "Please login to continue.", 
            from: window.location.pathname 
          }} 
          replace 
        />
      );
    }

    try {
      if (isFavorite) {
        await axios.delete(`https://career-compass-backend.onrender.com/api/favorites/${_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsFavorite(false);

      } else {
        await axios.post(
          `https://career-compass-backend.onrender.com/api/favorites/`,
          { userId: user.id, careerId: _id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Failed to update favorite:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="career-card">
      <Link to={`/careers/${id}`} className="career-card-link">
        <img src={image} alt={title} />
        <h3>
          {title}
          {isFavorite && <span className="favorite-icon">❤️</span>}
        </h3>
        <p>{description}</p>
      </Link>
      <button
        className={`favorite-button ${isFavorite ? "favorited" : ""}`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default CareerCard;
