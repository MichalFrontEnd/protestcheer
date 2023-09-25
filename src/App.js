import logo from "./logo.svg";

import "./App.scss";
import { ThemeToggle } from "./components/molecules/themetoggle";

function App() {
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
