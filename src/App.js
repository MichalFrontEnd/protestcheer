import logo from "./logo.svg";
import { useState } from "react";
import "./App.scss";
import { ThemeToggle } from "./components/molecules/themetoggle";

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(isBrowserDefaultDark() ? "dark" : "light");
  return (
    <div className={`theme-context`}>
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
    </div>
  );
}

export default App;
