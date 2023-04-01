
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero  from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-image bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
