import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer/footer";
import { Header } from "./Header/Headers/header";
import { Projects } from "./Projects/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
