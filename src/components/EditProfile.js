import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditProfile.css"; // Import the CSS file

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Changed email to phoneNumber
  const [bio, setBio] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
      setName(loggedInUser.name);
      setPhoneNumber(loggedInUser.phoneNumber || ""); // Set phone number
      setBio(loggedInUser.bio || "");
    } else {
      window.location.href = "/login";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, phoneNumber, bio }; // Updated to include phoneNumber

    // Update user data in localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));

    // Send updated data to the backend
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `https://career-compass-backend.onrender.com/api/auth/users/${user.id}`,
        updatedUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Profile updated successfully!");
      window.location.href = "/profile"; // Redirect to profile page
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label> {/* Changed email to phone number */}
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
