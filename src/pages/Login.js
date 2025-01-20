import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../assets/Login.css";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext); // Access login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://career-compass-backend.onrender.com/api/auth/login", { email, password });
      const { token, user } = response.data;

      // Use login function from context to set user and token
      login({ token, user });

      console.log("Login Successful");
      navigate(location.state?.from || "/profile");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  const redirectMessage = location.state?.message || ""; // Get the message from the location state

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        {redirectMessage && <p className="redirect-message">{redirectMessage}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
