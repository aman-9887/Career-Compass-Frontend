import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import defaultAvatar from "../assets/images/default-avatar.svg";
import "../assets/Profile.css";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) window.location.href = "/login";
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-page-container">
      {user ? (
        <div className="profile-card">
          <button id="logout-button" onClick={handleLogout}>Logout</button> {/* Logout Button */}

          <div className="profile-header">
            <img
              src={user.profileImage || defaultAvatar}
              alt="UserAvatar"
              className="avatar"
            />
            <h2>{user.name}</h2>
            <p className="user-email">{user.email}</p>
          </div>
          
          <div className="profile-info">
            <div className="info-item">
              <label>Phone Number:</label>
              <p>{user.phoneNumber || "No phone number provided."}</p>
            </div>
            <div className="info-item">
              <label>Gender:</label>
              <p>{user.gender || "Not specified"}</p>
            </div>
            <div className="info-item">
              <label>Bio:</label>
              <p className="bio">{user.bio || "No bio available."}</p>
            </div>
          </div>
          <div className="flex-profile-btn">
          <div className="profile-buttons">
            <button onClick={() => navigate("/edit-profile")}>Edit Profile</button>
          </div>

          <div className="profile-buttons">
            <button onClick={() => navigate("/favorites")}>View Favorites</button>
          </div>
          </div>
        </div>
      ) : (
        <p className="loading-message">Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
