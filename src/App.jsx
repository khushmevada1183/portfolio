import { useState, useEffect } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Timeline from "./Components/Timeline/Timeline";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
