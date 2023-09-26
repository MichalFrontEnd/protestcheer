import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme/Theme.context";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <span className="theme-toggle__icon">
        {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </span>
    </button>
  );
};

export default ThemeToggle;
