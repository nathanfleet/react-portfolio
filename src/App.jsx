
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero  from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
    
      <div className="relative z-0 bg-black">
        <div className="bg-hero-image bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
      </div>
    </BrowserRouter>
  )
}

export default App
