import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = (props) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    localStorage.theme === "light" && setTheme("light");
  }, []);

  useEffect(() => {
    localStorage.theme = theme;
    if (theme === "dark") return document.documentElement.classList.add("dark");
    return document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>
  );
};

export default ThemeState;
