import "./App.scss";
import { Header, Footer, CarouselElement } from "./components/organisms";

//ToDo: Decide if toggle switch stays here
function App() {
  return (
    <main className="theme-context">
      <div className="container">
        <Header />
        <CarouselElement />
        <Footer />
      </div>
    </main>
  );
}

export default App;
