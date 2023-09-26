import { createContext, useState, useContext } from "react";
export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  //checks if system prefers dark scheme
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  //checks for previous viewing theme or preffered view
  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem("theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    //sets current scheme to local storage
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
