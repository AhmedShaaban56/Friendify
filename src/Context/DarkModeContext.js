import { createContext, useEffect, useState } from "react";
// import { json } from "react-router-dom";

export const themeContext = createContext();
export const DarkModeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const toggle = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <themeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </themeContext.Provider>
  );
};
