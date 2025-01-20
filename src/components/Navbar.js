import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../assets/Navbar.css';
import defaultAvatar from '../assets/images/default-avatar.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // const handleLogout = () => {
  //   logout();
  //   navigate('/login');
  // };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Career Compass
      </Link>
      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={closeMenu}>
          <Link className='hover' to="/">Home</Link>
        </li>
        <li onClick={closeMenu}>
          <Link className='hover' to="/careers">Careers</Link>
        </li>
        <li onClick={closeMenu}>
          <Link className='hover' to="/about">About</Link>
        </li>
        <li onClick={closeMenu}>
          <Link className='hover' to="/contact">Contact</Link>
        </li>
        {!user ? (
          <>
            <li onClick={closeMenu}>
              <Link  to="/login" className="auth-link hover">Login</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/signup" className="auth-link signup-link">Sign Up</Link>
            </li>
          </>
        ) : (
          <>
            <li id='navbar-profile-btn' onClick={closeMenu}>
              <Link to="/profile" className="auth-link" >
                <img
                  src={user.profileImage || defaultAvatar}
                  alt="UserAvatar"
                  className="avatar-navbar"
                />
                
              </Link>
            </li>
            {/* <li onClick={closeMenu}>
              <button className="auth-link" onClick={handleLogout}>Logout</button>
            </li> */}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
