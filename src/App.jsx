
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Hero />
      </div>
    </BrowserRouter>
  )
}

export default App
