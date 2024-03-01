import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TopDeals from "./components/TopDeals";
import { HashLink as Link } from "react-router-hash-link";
import About from "./components/About";
import Download from "./components/Download";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    
    <div  className="w-screen  min-h-screen  overflow-x-hidden flex flex-col font-inter">
     
      <HeroSection />
      <TopDeals/>
      <About/>
      <Download/>
      <ContactUs/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
