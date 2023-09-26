import "./App.scss";
import { Footer, CarouselElement } from "./components/organisms";
import { ThemeToggle } from "./components/molecules";

//ToDo: Decide if toggle switch stays here
function App() {
  return (
    <main className="theme-context">
      <div className="container">
        <ThemeToggle />
        <CarouselElement />
        <Footer />
      </div>
    </main>
  );
}

export default App;
