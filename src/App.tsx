import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Socials from "./components/socials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Socials />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <footer></footer>
      </main>
    </div>
  );
}

export default App;
