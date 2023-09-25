import logo from "./logo.svg";
import React, { useContext } from "react";

import "./App.scss";
import { ThemeToggle } from "./components/molecules/themetoggle";
import { ThemeContext } from "./contexts/Theme/Theme.context";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("theme: ", theme);
  return (
    <div className="App">
      <ThemeToggle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
