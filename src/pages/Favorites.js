import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import CareerCard from "../components/CareerCard";
import '../assets/Favorites.css'

const Favorites = () => {
  const { user, token } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user) return;

      try {
        const response = await axios.get("https://career-compass-backend.onrender.com/api/favorites", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavorites(response.data);
      } catch (err) {
        setError("Failed to fetch favorites.");
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user, token]);

  const handleRemoveFavorite = async (careerId) => {
    try {
      await axios.delete(`https://career-compass-backend.onrender.com/api/favorites/${careerId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFavorites(favorites.filter((favorite) => favorite.careerId !== careerId));
      window.location.reload();
    } catch (error) {
      console.error("Failed to remove favorite:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (!user) {
    return <p>Please log in to view your favorites.</p>;
  }

  if (loading) {
    return <p>Loading favorites...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="favorites-container">
      <h2>Your Favorites</h2>
      <div className="career-grid">
        {favorites.length > 0 ? (
          favorites.map((career) => (
            <div key={career._id} className="favorite-item">
              <CareerCard
                id={career.careerId}
                title={career.title}
                description={career.description}
                image={career.image}
              />
              <button
                className="remove-favorite-button"
                onClick={() => handleRemoveFavorite(career._id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
