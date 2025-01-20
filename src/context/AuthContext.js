import React, { createContext, useState, useEffect, useContext } from 'react';

// Create Auth Context
export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);

  // Check token validity on app load
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');

    if (loggedInUser && storedToken) {
      // Optionally: Validate the token with your backend here
      setUser(loggedInUser);
      setToken(storedToken);
    }
  }, []);

  const login = ({ token, user }) => {
    setUser(user);
    setToken(token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // Automatically logout user if token is invalid or expires
  useEffect(() => {
    if (token) {
      // Decode token to check expiry (if your JWT includes an `exp` claim)
      const expiryTime = JSON.parse(atob(token.split('.')[1])).exp * 1000;
      const timeUntilExpiry = expiryTime - Date.now();

      if (timeUntilExpiry <= 0) {
        logout();
      } else {
        const timeoutId = setTimeout(logout, timeUntilExpiry);
        return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
      }
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
