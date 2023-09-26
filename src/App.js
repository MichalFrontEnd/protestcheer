import "./App.scss";
import { ThemeToggle } from "./components/molecules/themetoggle";

function App() {
  return (
    <div className={`theme-context`}>
      <div className="App">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
