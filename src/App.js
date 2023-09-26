import "./App.scss";
import { Footer } from "./components/organisms/footer";
import { ThemeToggle } from "./components/molecules/themetoggle";
//ToDo: Decide if toggle switch stays here
function App() {
  return (
    <main className="theme-context">
      <ThemeToggle />
      <Footer />
    </main>
  );
}

export default App;
