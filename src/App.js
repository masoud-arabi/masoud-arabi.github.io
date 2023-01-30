import About from "./components/About";
import Contact from "./components/Contact";
import Educations from "./components/Educations";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Educations />
      <Contact />
    </div>
  );
}

export default App;
