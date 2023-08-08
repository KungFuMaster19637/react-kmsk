import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check the authentication status from localStorage (or sessionStorage) on page load
    const authStatus = localStorage.getItem("isLoggedIn") === "true"; // Or use 'sessionStorage' if you prefer session-based authentication
    setIsLoggedIn(authStatus);
  }, []);

  // A function to set the authentication status when the user logs in or out
  const setAuthStatus = (status: any) => {
    setIsLoggedIn(status);
  };

  return { isLoggedIn, setAuthStatus };
};

export default useAuth;
