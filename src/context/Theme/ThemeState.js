import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = (props) => {
  const [theme, setTheme] = useState("dark");
  // Toggle the theme of the entire app (dark / light)
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const autoCompleteInputTheme = (theme) => {
    return document.documentElement.style.setProperty(
      "--input-text-color",
      `${theme == "dark" ? "rgb(203, 213, 225)" : "rgb(71, 85, 105)"}`
    );
  };

  useEffect(() => {
    localStorage.theme === "light" && setTheme("light");
  }, []);

  useEffect(() => {
    localStorage.theme = theme;
    autoCompleteInputTheme(theme);
    if (theme === "dark") return document.documentElement.classList.add("dark");
    return document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
