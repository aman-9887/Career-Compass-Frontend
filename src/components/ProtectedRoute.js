import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get the user state from context

  // If there's no user, redirect to the login page
  if (!user) {
    return <Navigate to="/login" state={{ message: "Please login to continue.", from: window.location.pathname }} />;
  }

  return children; // If the user is logged in, render the child components
};

export default ProtectedRoute;
