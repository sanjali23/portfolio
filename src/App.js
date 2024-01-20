import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About/About';
import Navbar from './Components/Navbar/Navbar';
import Work from './Pages/Work/Work';

function App() {
  AOS.init({
    duration: 1000, // Example duration
    easing: 'ease-in-out', // Example easing
    // Other options...
  });

  return (
    <>
    <Navbar/>
   <BrowserRouter>

      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/work" element={<Work />}/>


      </Routes>
      
      
      
    </BrowserRouter>
    <Footer/>
     </>
  );
}

export default App;
