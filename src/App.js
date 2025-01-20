import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Careers from "./pages/Careers";
import Profile from "./components/Profile"; // Import Profile component
import EditProfile from "./components/EditProfile"; // Import EditProfile component
import "./App.css";
import Footer from "./components/Footer";
import CareerDetails from "./pages/CareerDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import { AuthProvider } from "./context/AuthContext";
import Questions from "./components/Question";
import Favorites from "./pages/Favorites";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="wrapper">
          {" "}
          {/* Add wrapper to hold the entire layout */}
          <Navbar />
          <div className="main-content">
            {" "}
            {/* Main content area */}
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/careers" element={<Careers />} />
              <Route
                path="/careers/:id"
                element={
                  <ProtectedRoute>
                    <CareerDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions"
                element={
                  <ProtectedRoute>
                    <Questions />
                  </ProtectedRoute>
                }
              />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />{" "}
              {/* Add profile route */}
              <Route path="/edit-profile" element={<EditProfile />} />{" "}
              {/* Add edit profile route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
